import * as React from "react";
import { useEffect, useState } from "react";
import {
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Mesh,
  ArcRotateCamera,
  Color4,
  BlurPostProcess, Vector2, ImageProcessingPostProcess, MotionBlurPostProcess, Matrix, Camera, Vector4
} from "@babylonjs/core";
import { BabylonScene, VisualsContainer } from "./AudioVisualizerElements";
import { AudioData, useAudioContext } from "../../contexts/AudioContext";

let boxes: Mesh[] = [];
let activeAudioData: AudioData | undefined;
let audioDataArray: Uint8Array;
let boxesCount = 64;
let camera: ArcRotateCamera;
let projectionMatrix: Matrix;
let r: Vector4;
let t: number;
let defaultFov: number;

const onSceneReady = (scene: Scene) => {
  // This creates and positions a free camera (non-mesh)
  camera = new ArcRotateCamera("camera", -1.6, 1.6, 83, new Vector3(boxesCount-2.5, 1, 0), scene);
  // Disable panning (RMB movement)
  camera.panningSensibility = 0;

  defaultFov = camera.fov;

  const canvas = scene.getEngine().getRenderingCanvas();
  scene.clearColor = new Color4(0,0,0,0);
  scene.postProcessesEnabled = true;

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  projectionMatrix = camera.getProjectionMatrix();
  r = projectionMatrix.getRow(3) || new Vector4(0,0,0,0);
  t = 0;

  scene.registerBeforeRender(onBeforeCameraRender);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(1, 15, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 1;

  boxes = [];

  for(let i = 0; i < boxesCount; ++i) {
    // Our built-in 'box' shape.
    const box = MeshBuilder.CreateBox("box", { size: 1.5 }, scene);
    // Move the box upward 1/2 its height
    box.position.y = 1;
    box.position.x = i * 2;

    boxes.push(box);
  }
};

const onBeforeCameraRender = () => {
  if(r && activeAudioData?.analyser) {
    r.x += Math.cos(t) * 0.45;
    r.y += Math.sin(t) * 1.25;
    projectionMatrix.setRowFromFloats(3, r.x, r.y, r.z, r.w);
    t += 81337.18;
  }
}

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: Scene) => {
  if (boxes.length > 0 && activeAudioData?.analyser) {

    const numPoints = activeAudioData.analyser.frequencyBinCount;
    activeAudioData.analyser.getByteFrequencyData(audioDataArray);
    let accumulatedAudio = 0;

    for(let i = 0; i < boxes.length; ++i) {
      const ndx = i * numPoints / boxes.length | 0;
      const audioValue = audioDataArray[ndx] / 255.0 + 0.01;
      accumulatedAudio += audioDataArray[ndx] / 255.0;
      boxes[i].scaling.set(1, audioValue * 15, 1);
    }

    //camera.fov = defaultFov + ((accumulatedAudio / 35) * 0.05);
    console.log(accumulatedAudio);
  }

};

export const AudioVisualizer = () => {
  const { audioData } = useAudioContext();
  activeAudioData = audioData || undefined;

  useEffect(() => {
    if (audioData?.activeAudio && audioData?.analyser) {
      const audio = audioData.activeAudio;
      audio.currentTime = 0;
      audio.load();
      audio.play();

      audioDataArray = new Uint8Array(audioData.analyser.frequencyBinCount)
    }
  }, [audioData]);

  return (
    <VisualsContainer>
      <BabylonScene antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
    </VisualsContainer>
  );
};
