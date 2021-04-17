import Command from './commands/interface'
import CeilingFanHighCommand from './commands/variants/ceiling-fan-high-command'
import CeilingFanMediumCommand from './commands/variants/ceiling-fan-medium-command'
import CeilingFanOffCommand from './commands/variants/ceiling-fan-off-command'
import GarageDoorDownCommand from './commands/variants/garage-door-down-command'
import GarageDoorUpCommand from './commands/variants/garage-door-up-command'
import LightOffCommand from './commands/variants/light-off-command'
import LightOnCommand from './commands/variants/light-on-command'
import MacroCommand from './commands/variants/macro-command'
import StereoOffWithCDCommand from './commands/variants/stereo-off-command'
import StereoOnWithCDCommand from './commands/variants/stereo-on-with-cd-command'
import CeilingFan from './devices/ceiling-fan'
import GarageDoor from './devices/garage-door'
import Light from './devices/light'
import Stereo from './devices/stereo'
import RemoteControl from './remote-control'

const remoteControl = new RemoteControl()

const garageDoor = new GarageDoor()
const light = new Light()
const stereo = new Stereo()
const ceilingFan = new CeilingFan('Living Room')

const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor)
const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor)
const lightOn = new LightOnCommand(light)
const lightOff = new LightOffCommand(light)
const stereoOn = new StereoOnWithCDCommand(stereo)
const stereoOff = new StereoOffWithCDCommand(stereo)
const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan)
const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan)
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan)

remoteControl.setCommand(0, garageDoorUpCommand, garageDoorDownCommand)
remoteControl.setCommand(1, lightOn, lightOff)
remoteControl.setCommand(2, stereoOn, stereoOff)
remoteControl.setCommand(3, ceilingFanMedium, ceilingFanOff)
remoteControl.setCommand(4, ceilingFanHigh, ceilingFanOff)

console.log(remoteControl.toString())

remoteControl.onButtonWasPushed(0)
remoteControl.offButtonWasPushed(0)
remoteControl.onButtonWasPushed(1)
remoteControl.offButtonWasPushed(1)
remoteControl.onButtonWasPushed(2)
remoteControl.offButtonWasPushed(2)
remoteControl.onButtonWasPushed(4)
remoteControl.onButtonWasPushed(3)
remoteControl.undoButtonWasPushed()

const partyOn: Command[] = [lightOn, stereoOn, ceilingFanHigh]
const partyOff: Command[] = [lightOff, stereoOff, ceilingFanOff]

const partyOnMacro = new MacroCommand(partyOn)
const partyOffMacro = new MacroCommand(partyOff)

remoteControl.setCommand(5, partyOnMacro, partyOffMacro)
console.log(`--- Pushing Macro On ---`)
remoteControl.onButtonWasPushed(5)
console.log(`--- Pushing Macro Off ---`)
remoteControl.offButtonWasPushed(5)
