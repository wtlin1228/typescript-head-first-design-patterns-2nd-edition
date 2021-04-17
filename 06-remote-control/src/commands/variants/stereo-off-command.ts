import Stereo from '../../devices/stereo'
import Command from '../interface'

class StereoOffWithCDCommand implements Command {
  private stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  execute() {
    this.stereo.off()
  }

  undo() {
    this.stereo.on()
  }
}

export default StereoOffWithCDCommand
