import State from './state/interface'
import HasQuarterState from './state/variants/has-quarter-state'
import NoQuarterState from './state/variants/no-quarter-state'
import SoldOutState from './state/variants/sold-out-state'
import SoldState from './state/variants/sold-state'

class GumballMachine {
  private soldOutState: State
  private noQuarterState: State
  private hasQuarterState: State
  private soldState: State

  private state: State
  private count: number = 0

  constructor(count: number) {
    this.soldOutState = new SoldOutState(this)
    this.noQuarterState = new NoQuarterState(this)
    this.hasQuarterState = new HasQuarterState(this)
    this.soldState = new SoldState(this)

    this.count = count
    if (count > 0) {
      this.state = this.noQuarterState
    } else {
      this.state = this.soldOutState
    }
  }

  insertQuarter(): void {
    this.state.insertQuarter()
  }

  ejectQuarter(): void {
    this.state.ejectQuarter()
  }

  turnCrank(): void {
    this.state.turnCrank()
    this.state.dispense()
  }

  setState(state: State): void {
    this.state = state
  }

  getSoldOutState(): State {
    return this.soldOutState
  }

  getNoQuarterState(): State {
    return this.noQuarterState
  }

  getHasQuarterState(): State {
    return this.hasQuarterState
  }

  getSoldState(): State {
    return this.soldState
  }

  getCount(): number {
    return this.count
  }

  releaseBall(): void {
    console.log('A gumball comes rolling out the slot')
    this.count = this.count - 1
  }

  toString(): string {
    let message = ''
    switch (this.state) {
      case this.hasQuarterState:
        message = 'There is quarter. Turn the crank and get your gumball'
        break

      case this.noQuarterState:
        message = 'Machine is waiting for quarter'
        break

      case this.soldOutState:
        message = 'Machine is sold out'
        break

      case this.soldState:
        message = 'Machine is waiting for quarter'
        break

      default:
        throw new Error(`Call toString() at unexpected state: ${this.state}`)
    }

    return [
      '',
      'Mighty Gumball, Inc.',
      'JavaScript-enabled Standing Gumball Model #2021',
      `Inventory: ${this.count} gumball${this.count === 1 ? '' : 's'}`,
      message,
      '',
    ].join('\n')
  }
}

export default GumballMachine
