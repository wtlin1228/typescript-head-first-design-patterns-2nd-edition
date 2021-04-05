import { Cheese } from '../ingredients/cheese/interface'
import { Clams } from '../ingredients/clams/interface'
import { Dough } from '../ingredients/dough/interface'
import { Pepperoni } from '../ingredients/pepperoni/interface'
import { Sauce } from '../ingredients/sauce/interface'
import { Veggies } from '../ingredients/veggies/interface'

abstract class Pizza {
  protected name: string = ''

  protected dough!: Dough
  protected sauce!: Sauce
  protected veggies!: Veggies[]
  protected cheese!: Cheese
  protected pepperoni!: Pepperoni
  protected clam!: Clams

  abstract prepare(): void

  bake(): void {
    console.log(`Bake for 25 minutes at 350`)
  }

  cut(): void {
    console.log(`Cutting the pizza into diagonal slices`)
  }

  box(): void {
    console.log(`Place pizza in official PizzaStore box`)
  }

  setName(name: string): void {
    this.name = name
  }

  getName(): string {
    return this.name
  }

  toString(): string {
    // code to print pizza here
    return ''
  }
}

export { Pizza }
