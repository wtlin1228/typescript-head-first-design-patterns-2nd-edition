import BeatModelInterface from './beat-model-interface'
import BeatObserver from './beat-observer'
import BPMObserver from './bpm-observer'

class BeatModel implements BeatModelInterface {
  private beatObservers: BeatObserver[] = []
  private bpmObservers: BPMObserver[] = []
  private bpm: number = 90
  private stop: boolean = false
  private audioSrc: string = 'sounds/clap.wav'
  private playBeat?: Function

  initialize(): void {
    const audio = new Audio(this.audioSrc)
    this.playBeat = function playBeat() {
      audio.currentTime = 0
      audio.play()
    }
    console.log(`load audio source ${this.audioSrc}`)
  }

  on(): void {
    this.bpm = 90
    this.stop = false
    this.run()
  }

  off(): void {
    this.stopBeat()
    this.stop = true
  }

  run(): void {
    if (!this.stop) {
      this.playBeat?.()
      this.notifyBeatObservers()
      this.notifyBPMObservers()
      setTimeout(() => {
        this.run()
      }, 60000 / this.getBPM())
    }
  }

  setBPM(bpm: number): void {
    this.bpm = bpm
  }

  getBPM(): number {
    return this.bpm
  }

  registerBeatObserver(o: BeatObserver): void {
    this.beatObservers.push(o)
  }

  removeBeatObserver(o: BeatObserver): void {
    this.beatObservers = this.beatObservers.filter(
      (beatObserver) => beatObserver === o
    )
  }

  notifyBeatObservers(): void {
    this.beatObservers.forEach((o) => o.updateBeat())
  }

  registerBPMObserver(o: BPMObserver): void {
    this.bpmObservers.push(o)
  }

  removeBPMObserver(o: BPMObserver): void {
    this.bpmObservers = this.bpmObservers.filter(
      (bpmObserver) => bpmObserver === o
    )
  }

  notifyBPMObservers(): void {
    this.bpmObservers.forEach((o) => o.updateBPM())
  }

  stopBeat(): void {
    console.log(`stop ${this.audioSrc}`)
  }
}

export default BeatModel
