abstract class Beverage {
  description: string = 'Unknown Beverage'

  getDescription(): string {
    return this.description
  }

  abstract cost(): number
}

abstract class CondimentDecorator extends Beverage {
  beverage!: Beverage
  abstract getDescription(): string
}

export { Beverage, CondimentDecorator }
