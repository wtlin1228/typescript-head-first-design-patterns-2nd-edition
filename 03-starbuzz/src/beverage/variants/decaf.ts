import { Beverage } from '../abstract'

class Decaf extends Beverage {
  constructor() {
    super()
    this.description = 'Decaf'
  }

  cost(): number {
    return 1.05
  }
}

export { Decaf }
