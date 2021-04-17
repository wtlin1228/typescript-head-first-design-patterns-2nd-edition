import Command from '../interface'

class NoCommand implements Command {
  constructor() {}

  execute() {
    console.log(`No Command is executed`)
  }

  undo() {
    console.log(`No Command is executed`)
  }
}

export default NoCommand
