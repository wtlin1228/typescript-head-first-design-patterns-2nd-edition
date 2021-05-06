import GumballMachine from '../../gumball-machine'
import State from '../interface'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

function isWinner(): boolean {
  return getRandomInt(10) === 0
}

class HasQuarterState implements State {
  private gumballMachine: GumballMachine

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine
  }

  insertQuarter(): void {
    console.log("You can't insert another quarter")
  }

  ejectQuarter(): void {
    console.log('Quarter returned')
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
  }

  turnCrank(): void {
    console.log('You turned...')

    if (isWinner() && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState())
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState())
    }
  }

  dispense(): void {
    console.log('You need to turn the crank')
  }

  refill(): void {}
}

export default HasQuarterState
