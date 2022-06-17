export class AudioInput {
  public frequencyBinCount: number;
  public audioData: Uint8Array;
  public accumulatedAudio: number;

  constructor() {
    this.frequencyBinCount = 0;
    this.accumulatedAudio = 0;
    this.audioData = new Uint8Array();
  }

  update(frequencyBinCount: number, accumulatedAudio: number, audioData: Uint8Array) {
    this.frequencyBinCount = frequencyBinCount;
    this.audioData = audioData;
    this.accumulatedAudio = accumulatedAudio;
  }
}
