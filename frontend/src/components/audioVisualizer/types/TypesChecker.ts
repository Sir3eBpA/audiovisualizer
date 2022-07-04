import { IBeforeSceneRendererExtension } from "./IBeforeSceneRendererExtension";
import { IFrameRenderExtension } from "./IFrameRenderExtension";

const beforeSceneRenderEx = <IBeforeSceneRendererExtension>{};
const frameRenderEx = <IFrameRenderExtension>{};

export function IsFrameRender<T>(T: any) : T is IFrameRenderExtension { return "onFrameRender" in T; }
export function IsBeforeSceneRenderer<T>(T: any) : T is IBeforeSceneRendererExtension { return "onBeforeSceneRender" in T; }
