import { PizzaIngredientFactory } from '../../ingredient-factory/interface'
import { Pizza } from '../abstract'

class CheesePizza extends Pizza {
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
  }
}

export { CheesePizza }
