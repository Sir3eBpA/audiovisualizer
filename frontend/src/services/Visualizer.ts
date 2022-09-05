import axios from "axios";
import FormData from "form-data";
import { DataURItoBlob } from "../utils/StringUtils";
import { Tools } from "@babylonjs/core";
import { Visualizer } from "../components/audioVisualizer/AudioVisualizer";
import html2canvas from "html2canvas";
import { SortingMode } from "../utils/MongooseUtils";

//
// Get Visualizers
//

export type VisualizerData = {
  name: string,
  json: string,
  id: string,
  previewImage?: string,
}

export const asyncGetVisualizerById = async (id: string): Promise<VisualizerData> => {
  const res = await axios.get(`api/v1/visualizer/${id}`);

  if (res.status === 404)
    throw new Error("Cannot find visualizer with id: " + id);
  else if (res.status !== 200)
    throw new Error(`Encountered unknown code in ${asyncGetVisualizerById} - ${res.status}`);

  return res.data as VisualizerData;
};

export const asyncGetTopVisualizers = async (amount: number, sort?: SortingMode): Promise<VisualizerData[]> => {
  const limit = amount > 100 ? 100 : amount;

  const res = await axios.get(
    "api/v1/visualizer/getTop",
    {
      params: { limit, sort },
      headers: { "Content-Type": "application/json" }
    });

  return res.data as VisualizerData[];
};

//
// Create Visualizer
//

export const takeVisualizerScreenshot = async (isVideoBackground: boolean): Promise<HTMLCanvasElement> => {
  const backgroundDiv = document.querySelector("#background") as HTMLElement;
  if (!backgroundDiv)
    throw new Error("Cannot find Background div!");
  // make a copy of canvas in webgl
  await Tools.CreateScreenshotAsync(Visualizer.engine, Visualizer.camera, { width: 1024, height: 576 });
  // copy the background canvas with the cached copy from babylon we obtain above
  // this is actually pretty interesting because it helps us reduce amount of actions on the client
  // there's no need to merge these 2 screenshots on the output
  const backgroundScreenshot = await html2canvas(backgroundDiv, {
    onclone: (doc, el) => {
      if (isVideoBackground) {
        el.style.backgroundColor = "black";
      }

      el.style.width = "1024px";
      el.style.height = "576px";
    }
  });

  return backgroundScreenshot;
};

export const asyncCreateVisualizer = async (imageBase64: string, name: string, data: any) => {
  var formData = new FormData();
  formData.append("preview", DataURItoBlob(imageBase64), "screenshot.png");
  formData.append("json", JSON.stringify(data));
  formData.append("name", name);

  await axios({
    method: "post",
    url: "api/v1/visualizer/create",
    headers: { "Content-Type": "multipart/form-data" },
    data: formData
  });
};
