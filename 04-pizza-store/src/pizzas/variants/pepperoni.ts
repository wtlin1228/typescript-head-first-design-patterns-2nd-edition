import { PizzaIngredientFactory } from '../../ingredient-factory/interface'
import { Pizza } from '../abstract'

class PepperoniPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.veggies = this.ingredientFactory.createVeggies()
    this.pepperoni = this.ingredientFactory.createPepperoni()
  }
}

export { PepperoniPizza }
