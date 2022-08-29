import * as React from "react";
import { useEffect } from "react";
import { ArcRotateCamera, Camera, Color4, Engine, HemisphericLight, Scene, Vector3 } from "@babylonjs/core";
import { BabylonScene, VisualsContainer } from "./AudioVisualizerElements";
import { AudioData, useAudioContext } from "../../contexts/AudioContext";
import { AudioInput } from "./AudioInput";
import { useModifiersContext } from "../../contexts/ModifiersContext";
import { VisualizerExtension } from "./extensions/VisualizerExtension";
import { ColorLerpExtension } from "./extensions/colorLerp/ColorLerpExtension";
import { BoxesScaleExtension } from "./extensions/boxesScale/BoxesScaleExtension";
import { ScreenShakeExtension } from "./extensions/screenShake/ScreenShakeExtension";
import { CameraDistanceExtension } from "./extensions/cameraDistanceChanger/CameraDistanceExtension";
import { Time } from "../../engine/Time";
import { Modifiers} from "../../Constants";
import { BuildCss } from "./AudioVisualizerStylesBuilder";
import { IFrameRenderExtension } from "./types/IFrameRenderExtension";
import { IBeforeSceneRendererExtension } from "./types/IBeforeSceneRendererExtension";
import { IsBeforeSceneRenderer, IsFrameRender } from "./types/TypesChecker";
import { IVisualizer } from "./visualizers/IVisualizer";
import Emitter from "../../utils/Emitter";
import { EmitterEvents } from "../../utils/EmitterEvents";
import 'babylonjs-inspector';
import { CreateVisualizer } from "./visualizers/VisualizersFactory";
import _ from "lodash";
import { SingleLine } from "./visualizers/SingleLine";
import { usePageContext } from "../../contexts/PageContext";

export class Visualizer {
  static engine: Engine;
  static camera: Camera;
}

let activeAudioData: AudioData | undefined;
let audioDataArray: Uint8Array;
let camera: ArcRotateCamera;
const audioInput = new AudioInput();
let extensions: VisualizerExtension[];
let activeFrame: number = 0;
let lastUpdateFrame: number = -1;
let activeScene: Scene;
let lastVisualizerData: Object;

let visualizer: IVisualizer;
let renderFrameExs: IFrameRenderExtension[];
let beforeSceneRenderFrameExs: IBeforeSceneRendererExtension[];

const updateExtensions = (inputData: any) => {
  extensions = [
    new ColorLerpExtension(inputData),
    new BoxesScaleExtension(inputData),
    new ScreenShakeExtension(inputData),
    new CameraDistanceExtension(inputData)
  ];

  for (let i = 0; i < extensions.length; ++i) {
    extensions[i].initialize(activeScene);
  }

  // build extensions based on their interface
  renderFrameExs = extensions.filter( x => IsFrameRender(x) ) as unknown as IFrameRenderExtension[];
  beforeSceneRenderFrameExs = extensions.filter( x => IsBeforeSceneRenderer(x) ) as unknown as IBeforeSceneRendererExtension[];
};

const updateVisualizer = (visualizerData: any) => {
  visualizer.despawn(activeScene);

  const visualizerType = visualizerData["mode"];
  // if we want to spawn a new type of visualizer
  if(visualizer.Name !== visualizerType) {

    const newVisualizer = CreateVisualizer(visualizerType);
    if(newVisualizer) {
      visualizer = newVisualizer;
    }
    else {
      console.error("Cannot find visualizer of type: " + visualizerType);
    }
  }

  visualizer.spawn(activeScene, visualizerData);
}

const onSceneReady = (scene: Scene, inputData: any) => {
  // This creates and positions a free camera (non-mesh)
  camera = new ArcRotateCamera("camera", -0.95, 1.39, 95, new Vector3(0, 1, 0), scene);
  camera.storeState();

  // Disable panning (RMB movement)
  camera.panningSensibility = 250;

  activeScene = scene;

  const canvas = scene.getEngine().getRenderingCanvas();
  scene.clearColor = new Color4(0, 0, 0, 0);
  scene.postProcessesEnabled = true;

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  scene.registerBeforeRender(onBeforeCameraRender);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(1, 15, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 1;

  visualizer = new SingleLine();
  visualizer.spawn(activeScene, { amount: 64 });

  camera.setTarget(visualizer.getCenterPosition().clone());

  Emitter.on(EmitterEvents.RESET_CAMERA, () => {
    camera.restoreState();
    camera.setTarget(visualizer.getCenterPosition().clone());
  });

  updateExtensions(inputData);

  Visualizer.engine = scene.getEngine();
  Visualizer.camera = camera;
};

const onBeforeCameraRender = () => {
  if (activeAudioData?.analyser) {
    for (let i = 0; i < beforeSceneRenderFrameExs.length; ++i) {
      beforeSceneRenderFrameExs[i].onBeforeSceneRender(activeScene, visualizer, audioInput);
    }
  }
};

const updateAudioData = () => {
  if (!visualizer || !activeAudioData?.analyser)
    return;

  // optimization, only run update audio once per frame
  if (activeFrame === lastUpdateFrame)
    return;

  lastUpdateFrame = activeFrame;

  const numPoints = activeAudioData.analyser.frequencyBinCount;
  activeAudioData.analyser.getByteFrequencyData(audioDataArray);
  let accumulatedAudio = 0;

  for (let i = 0; i < visualizer.TotalVisuals; ++i) {
    const ndx = i * numPoints / visualizer.TotalVisuals | 0;
    accumulatedAudio += audioDataArray[ndx] / 255.0;
  }

  audioInput.update(numPoints, accumulatedAudio, audioDataArray);
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: Scene) => {

  Time.Dt = scene.getEngine().getDeltaTime() / 1000;

  if (visualizer.TotalVisuals > 0 && activeAudioData?.analyser) {

    updateAudioData();

    for (let i = 0; i < renderFrameExs.length; ++i) {
      renderFrameExs[i].onFrameRender(scene, visualizer, audioInput);
    }
  }
  ++activeFrame;
};

const onSceneDisposed = () => {
  console.log("unmounted audio visualizer!");
};

export const AudioVisualizer = () => {
  const { audioData } = useAudioContext();
  const { data } = useModifiersContext();
  const { pageData } = usePageContext();
  activeAudioData = audioData || undefined;

  const visualizerData = data[Modifiers.VISUALIZER];

  useEffect(() => {
    if (audioData?.activeAudio && audioData?.analyser) {
      const audio = audioData.activeAudio;
      audio.currentTime = 0;
      audio.load();
      audio.play();

      audioDataArray = new Uint8Array(audioData.analyser.frequencyBinCount);
    }
  }, [audioData]);

  useEffect(() => {
    if(!lastVisualizerData || !_.isEqual(lastVisualizerData, visualizerData)) {
      updateVisualizer(visualizerData);
      lastVisualizerData = {...visualizerData};
    }

    updateExtensions(data);
  }, [data]);

  useEffect(() => {
    if(pageData.inspectorOn)
      activeScene.debugLayer.show({ embedMode: true });
    else
      activeScene.debugLayer.hide();
  }, [pageData]);

  // call to clean up the scene on component unmount
  useEffect(() => () => onSceneDisposed(), []);

  const bgData = data[Modifiers.BACKGROUND];
  const css = BuildCss(bgData);

  return (
    <VisualsContainer style={css} id="background">
      <BabylonScene antialias
                    engineOptions={{ preserveDrawingBuffer:true }}
                    onSceneReady={e => onSceneReady(e, data)}
                    onRender={onRender}
                    id="my-canvas" />
    </VisualsContainer>
  );
};
