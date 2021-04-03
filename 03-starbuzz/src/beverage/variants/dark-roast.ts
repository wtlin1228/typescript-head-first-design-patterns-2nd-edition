import { Beverage } from '../abstract'

class DarkRoast extends Beverage {
  constructor() {
    super()
    this.description = 'Dark Roast'
  }

  cost(): number {
    return 0.99
  }
}

export { DarkRoast }
