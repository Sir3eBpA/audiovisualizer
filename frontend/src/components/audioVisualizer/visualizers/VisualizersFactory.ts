import { IVisualizer } from "./IVisualizer";
import { VisualizerType } from "../../../Constants";
import { SingleLine } from "./SingleLine";
import { MultiLine } from "./MultiLine";
import { Circle } from "./Circle";
import { Sphere } from "./Sphere";

export const CreateVisualizer = (type: string) : IVisualizer|null => {
  switch (type) {
    case VisualizerType.SINGLE_LINE: return new SingleLine();
    case VisualizerType.MULTI_LINE: return new MultiLine();
    case VisualizerType.CIRCLE: return new Circle();
    case VisualizerType.SPHERE: return new Sphere();
    default: return null;
  }
}
