import BeatObserver from './beat-observer'
import BPMObserver from './bpm-observer'

interface BeatModelInterface {
  initialize(): void

  on(): void

  off(): void

  setBPM(bpm: number): void

  getBPM(): number

  registerBeatObserver(o: BeatObserver): void

  removeBeatObserver(o: BeatObserver): void

  registerBPMObserver(o: BPMObserver): void

  removeBPMObserver(o: BPMObserver): void
}

export default BeatModelInterface
