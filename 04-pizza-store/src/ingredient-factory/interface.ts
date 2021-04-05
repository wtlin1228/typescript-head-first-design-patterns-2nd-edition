import { Cheese } from '../ingredients/cheese/interface'
import { Clams } from '../ingredients/clams/interface'
import { Dough } from '../ingredients/dough/interface'
import { Pepperoni } from '../ingredients/pepperoni/interface'
import { Sauce } from '../ingredients/sauce/interface'
import { Veggies } from '../ingredients/veggies/interface'

interface PizzaIngredientFactory {
  createDough(): Dough
  createSauce(): Sauce
  createCheese(): Cheese
  createVeggies(): Veggies[]
  createPepperoni(): Pepperoni
  createClam(): Clams
}

export { PizzaIngredientFactory }
