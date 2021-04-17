import GarageDoor from '../../devices/garage-door'
import Command from '../interface'

class GarageDoorUpCommand implements Command {
  private garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute() {
    this.garageDoor.up()
  }

  undo() {
    this.garageDoor.down()
  }
}

export default GarageDoorUpCommand
