import Light from '../../devices/light'
import Command from '../interface'

class LightOffCommand implements Command {
  private light: Light

  constructor(light: Light) {
    this.light = light
  }

  execute() {
    this.light.off()
  }

  undo() {
    this.light.on()
  }
}

export default LightOffCommand
