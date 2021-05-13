import BeatControllerInterface from './beat-controller-interface'
import BeatModelInterface from './beat-model-interface'
import BeatObserver from './beat-observer'
import BPMObserver from './bpm-observer'

class DJView implements BeatObserver, BPMObserver {
  private model: BeatModelInterface
  private controller: BeatControllerInterface
  private bpmOutputLabel?: HTMLElement | null
  private beatBar?: HTMLElement | null
  private startButton?: HTMLElement | null
  private stopButton?: HTMLElement | null
  private increaseBPMButton?: HTMLElement | null
  private decreaseBPMButton?: HTMLElement | null

  constructor(model: BeatModelInterface, controller: BeatControllerInterface) {
    this.controller = controller
    this.model = model
    this.model.registerBPMObserver(this)
    this.model.registerBeatObserver(this)
  }

  createView(): void {
    this.bpmOutputLabel = document.createElement('p')

    this.beatBar = document.createElement('input')
    this.beatBar.setAttribute('type', 'range')
    this.beatBar.setAttribute('min', '0')
    this.beatBar.setAttribute('max', '300')

    this.startButton = document.createElement('button')
    this.startButton.innerText = 'Start'
    this.stopButton = document.createElement('button')
    this.stopButton.innerText = 'Stop'

    this.increaseBPMButton = document.createElement('button')
    this.increaseBPMButton.innerText = '>>'
    this.decreaseBPMButton = document.createElement('button')
    this.decreaseBPMButton.innerText = '<<'

    document.getElementById('bpm-label')?.append(this.bpmOutputLabel)
    document.getElementById('beat-bar')?.append(this.beatBar)
    document.getElementById('bpm-buttons')?.append(this.decreaseBPMButton)
    document.getElementById('bpm-buttons')?.append(this.increaseBPMButton)
    document.getElementById('play-buttons')?.append(this.startButton)
    document.getElementById('play-buttons')?.append(this.stopButton)
  }

  createControl(): void {
    this.startButton?.addEventListener('click', () => {
      this.controller.start()
    })

    this.stopButton?.addEventListener('click', () => {
      this.controller.stop()
    })

    this.beatBar?.addEventListener('change', (e) => {
      if (e.target) {
        // @ts-expect-error
        this.controller.setBPM(e.target.value)
      }
    })

    this.increaseBPMButton?.addEventListener('click', () => {
      this.controller.increaseBPM()
    })

    this.decreaseBPMButton?.addEventListener('click', () => {
      this.controller.decreaseBPM()
    })
  }

  enableStopButton(): void {
    if (this.stopButton) {
      // @ts-expect-error
      this.stopButton.disabled = false
    }
  }

  disableStopButton(): void {
    if (this.stopButton) {
      // @ts-expect-error
      this.stopButton.disabled = true
    }
  }

  enableStartButton(): void {
    if (this.startButton) {
      // @ts-expect-error
      this.startButton.disabled = false
    }
  }

  disableStartButton(): void {
    if (this.startButton) {
      // @ts-expect-error
      this.startButton.disabled = true
    }
  }

  updateBPM(): void {
    if (!this.bpmOutputLabel) {
      return
    }

    const bpm = this.model.getBPM()
    if (bpm === 0) {
      this.bpmOutputLabel.innerHTML = 'offline'
    } else {
      this.bpmOutputLabel.innerHTML = `Current BPM: ${bpm}`
    }
  }

  updateBeat(): void {
    if (!this.beatBar) {
      return
    }

    // @ts-expect-error
    this.beatBar.value = this.model.getBPM()
  }
}

export default DJView
