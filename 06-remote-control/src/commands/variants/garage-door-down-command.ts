import GarageDoor from '../../devices/garage-door'
import Command from '../interface'

class GarageDoorDownCommand implements Command {
  private garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute() {
    this.garageDoor.down()
  }

  undo() {
    this.garageDoor.up()
  }
}

export default GarageDoorDownCommand
