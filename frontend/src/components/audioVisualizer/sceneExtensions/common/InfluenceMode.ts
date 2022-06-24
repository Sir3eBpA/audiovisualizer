import { AudioInput } from "../../AudioInput";

export enum InfluenceMode { Single = "single", Group = "group" }

export function getInfluenceModeFromString(mode: string): InfluenceMode {
  const lowerCaseMode = mode.toLowerCase();
  return lowerCaseMode as InfluenceMode;
}

export function calculateModeMultiplier(mode: InfluenceMode, maxAccumulatedAudio: number, audioData: AudioInput) {
  if(mode === InfluenceMode.Single) {
    const numPoints = audioData.frequencyBinCount;
    let highestFrequency: number = 0;

    for (let i = 0; i < maxAccumulatedAudio; ++i) {
      const ndx = i * numPoints / maxAccumulatedAudio | 0;
      const freq = audioData.audioData[ndx] / 255.0;

      if(highestFrequency < freq)
        highestFrequency = freq;
    }
    return highestFrequency;

  } else if (mode === InfluenceMode.Group) {
    return audioData.accumulatedAudio / maxAccumulatedAudio;
  }

  return 1;
}
