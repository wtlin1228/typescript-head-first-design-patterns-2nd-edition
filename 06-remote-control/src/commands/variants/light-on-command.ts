import Light from '../../devices/light'
import Command from '../interface'

class LightOnCommand implements Command {
  private light: Light

  constructor(light: Light) {
    this.light = light
  }

  execute() {
    this.light.on()
  }

  undo() {
    this.light.off()
  }
}

export default LightOnCommand
