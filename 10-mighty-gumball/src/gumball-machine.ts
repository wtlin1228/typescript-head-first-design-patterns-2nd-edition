enum State {
  SOLD_OUT = 'SOLD_OUT',
  NO_QUARTER = 'NO_QUARTER',
  HAS_QUARTER = 'HAS_QUARTER',
  SOLD = 'SOLD',
}

class GumballMachine {
  private state = State.SOLD_OUT
  private count = 0

  constructor(count: number) {
    this.count = count
    if (count > 0) {
      this.state = State.NO_QUARTER
    }
  }

  toString(): string {
    let message = ''
    switch (this.state) {
      case State.HAS_QUARTER:
        message = 'There is quarter. Turn the crank and get your gumball'
        break

      case State.NO_QUARTER:
        message = 'Machine is waiting for quarter'
        break

      case State.SOLD_OUT:
        message = 'Machine is sold out'
        break

      case State.SOLD:
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

  insertQuarter(): void {
    switch (this.state) {
      case State.HAS_QUARTER:
        console.log("You can't insert another quarter")
        return

      case State.NO_QUARTER:
        console.log('You inserted a quarter')
        this.state = State.HAS_QUARTER
        return

      case State.SOLD_OUT:
        console.log("You can't insert a quarter, the machine is sold out")
        return

      case State.SOLD:
        console.log("Please wait, we're already giving you a gumball")
        return

      default:
        throw new Error(
          `Call insertQuarter() at unexpected state: ${this.state}`
        )
    }
  }

  ejectQuarter(): void {
    switch (this.state) {
      case State.HAS_QUARTER:
        console.log('Quarter returned')
        this.state = State.NO_QUARTER
        return

      case State.NO_QUARTER:
        console.log("You haven't inserted a quarter")
        return

      case State.SOLD_OUT:
        console.log("You can't eject, you haven't inserted a quarter yet")
        return

      case State.SOLD:
        console.log('Sorry, you already turned the crank')
        return

      default:
        throw new Error(
          `Call ejectQuarter() at unexpected state: ${this.state}`
        )
    }
  }

  turnCrank(): void {
    switch (this.state) {
      case State.HAS_QUARTER:
        console.log('You turned...')
        this.state = State.SOLD
        this.dispense()
        return

      case State.NO_QUARTER:
        console.log('You turned, but there is no quarter')
        return

      case State.SOLD_OUT:
        console.log('You turned, but there are no gumballs')
        return

      case State.SOLD:
        console.log("Turning twice doesn't get you another gumball!")
        return

      default:
        throw new Error(`Call turnCrank() at unexpected state: ${this.state}`)
    }
  }

  dispense(): void {
    switch (this.state) {
      case State.HAS_QUARTER:
        console.log('You need to turn the crank')
        return

      case State.NO_QUARTER:
        console.log('You need to pay first')
        return

      case State.SOLD_OUT:
        console.log('No gumball dispensed')
        return

      case State.SOLD:
        console.log('A gumball comes rolling out the slot')
        this.count = this.count - 1
        if (this.count === 0) {
          console.log('Oops, out of gumballs!')
          this.state = State.SOLD_OUT
        } else {
          this.state = State.NO_QUARTER
        }
        return

      default:
        throw new Error(`Call dispense() at unexpected state: ${this.state}`)
    }
  }
}

export default GumballMachine
