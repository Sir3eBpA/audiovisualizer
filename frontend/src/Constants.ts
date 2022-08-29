
export const Modifiers = {
  COLOR_LERP: "color_lerp",
  SCREENSHAKE: "screenshake",
  BOXES_SCALE: "boxes_scale",
  CAM_DISTANCE: "fov",
  BACKGROUND: "bg",
  VISUALIZER: "visualizer"
}

export const BackgroundType = {
  SOLID: "solid",
  GRADIENT: "gradient",
  VIDEO: "video"
}

export const VisualizerType = {
  SINGLE_LINE: "singleLine",
  MULTI_LINE: "multiLine",
  CIRCLE: "circle",
  SPHERE: "sphere"
}

export const AnimationType = {
  HUE_ROTATE: "hue-rotate",
  INFINITE_SCROLL: "infinite-scroll"
}

export const MaxBoxesAmount: number = 5000;
export const MaxBoxSize: number = 1000;

export const Defaults = {
  "bg": {
    "vignetteRadius": 100,
    "vignetteColor": "black",
    "bgSizeX": 100,
    "bgSizeY": 100,
    "type": BackgroundType.SOLID,
    "bgColor": "#3E475A"
  },
  "visualizer": {
    "mode": VisualizerType.SINGLE_LINE,
    "amount": 64,
    "spacing": 1.2
  }
}
