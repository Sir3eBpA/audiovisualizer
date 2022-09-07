export type VisualizerData = {
  name: string,
  json: string,
  id: string,
  previewUrl: string,
}

export type VisualizersCollection = {
  visualizers: VisualizerData[],
  totalAmount: number,
}
