import Stereo from '../../devices/stereo'
import Command from '../interface'

class StereoOnWithCDCommand implements Command {
  private stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  execute() {
    this.stereo.on()
    this.stereo.setCD()
    this.stereo.setVolume()
  }

  undo() {
    this.stereo.off()
  }
}

export default StereoOnWithCDCommand
