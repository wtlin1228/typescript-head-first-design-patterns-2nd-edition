import BeatControllerInterface from './beat-controller-interface'
import BeatModelInterface from './beat-model-interface'
import DJView from './dj-view'

class BeatController implements BeatControllerInterface {
  private model: BeatModelInterface
  private view: DJView

  constructor(model: BeatModelInterface) {
    this.model = model
    this.view = new DJView(model, this)
    this.view.createView()
    this.view.createControl()
    this.view.disableStopButton()
    this.view.enableStartButton()
    this.model.initialize()
  }

  start(): void {
    this.model.on()
    this.view.disableStartButton()
    this.view.enableStopButton()
  }

  stop(): void {
    this.model.off()
    this.view.disableStopButton()
    this.view.enableStartButton()
  }

  increaseBPM(): void {
    this.model.setBPM(this.model.getBPM() + 1)
  }

  decreaseBPM(): void {
    this.model.setBPM(this.model.getBPM() - 1)
  }

  setBPM(bpm: number): void {
    this.model.setBPM(bpm)
  }
}

export default BeatController
