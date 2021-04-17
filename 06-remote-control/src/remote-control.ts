import Command from './commands/interface'
import NoCommand from './commands/variants/no-command'

class RemoteControl {
  private onCommands: Command[]
  private offCommands: Command[]
  private undoCommand: Command
  private readonly length = 7

  constructor() {
    const noCommand = new NoCommand()
    this.onCommands = Array.from({ length: this.length }).map(() => noCommand)
    this.offCommands = Array.from({ length: this.length }).map(() => noCommand)
    this.undoCommand = noCommand
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  undoButtonWasPushed(): void {
    this.undoCommand.undo()
  }

  toString(): string {
    let result = ''
    for (let i = 0; i < this.length; i++) {
      result += `[slot${i}] ${this.onCommands[i].constructor.name}   ${this.offCommands[i].constructor.name}\n`
    }
    result += `[undo] ${this.undoCommand.constructor.name}`
    return result
  }
}

export default RemoteControl
