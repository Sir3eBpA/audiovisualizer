export const Modifiers = {
  COLOR_LERP: "color_lerp",
  SCREENSHAKE: "screenshake",
  BOXES_SCALE: "boxes_scale",
  CAM_DISTANCE: "fov",
  BACKGROUND: "bg",
  VISUALIZER: "visualizer"
}

export const VisualizerType = {
  SINGLE_LINE: "singleLine",
  MULTI_LINE: "multiLine",
  CIRCLE: "circle"
}

export const AnimationType = {
  HUE_ROTATE: "hue-rotate",
  INFINITE_SCROLL: "infinite-scroll"
}

export const Defaults = {
  "bg": {
    "vignetteRadius": 100,
    "vignetteColor": "black",
    "bgSizeX": 100,
    "bgSizeY": 100
  },
  "visuaizer": {
    "mode": VisualizerType.SINGLE_LINE
  }
}
