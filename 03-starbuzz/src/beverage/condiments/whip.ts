import { Beverage, CondimentDecorator } from '../abstract'

class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Whip'
  }

  cost(): number {
    return this.beverage.cost() + 0.1
  }
}

export { Whip }
