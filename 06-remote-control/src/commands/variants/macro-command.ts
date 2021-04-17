import Command from '../interface'

class MacroCommand implements Command {
  private commands: Command[]

  constructor(commands: Command[]) {
    this.commands = commands
  }

  execute(): void {
    this.commands.forEach((command) => command.execute())
  }

  undo(): void {
    this.commands.reverse().forEach((command) => command.undo())
  }
}

export default MacroCommand
