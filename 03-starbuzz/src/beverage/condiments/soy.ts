import { Beverage, CondimentDecorator } from '../abstract'

class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Soy'
  }

  cost(): number {
    return this.beverage.cost() + 0.15
  }
}

export { Soy }
