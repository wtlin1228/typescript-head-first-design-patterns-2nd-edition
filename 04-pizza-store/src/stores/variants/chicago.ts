import { PizzaStore } from '../abstract'
import { Pizza } from '../../pizzas/abstract'
import { PizzaIngredientFactory } from '../../ingredient-factory/interface'
import { CheesePizza } from '../../pizzas/variants/cheese'
import { ClamPizza } from '../../pizzas/variants/clam'
import { VeggiePizza } from '../../pizzas/variants/veggie'
import { PepperoniPizza } from '../../pizzas/variants/pepperoni'
import { ChicagoPizzaIngredientFactory } from '../../ingredient-factory/variants/chicago'

class ChicagoPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    const ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory()

    if (item === 'cheese') {
      const pizza = new CheesePizza(ingredientFactory)
      pizza.setName('Chicago Style Cheese Pizza')

      return pizza
    } else if (item === 'veggie') {
      const pizza = new VeggiePizza(ingredientFactory)
      pizza.setName('Chicago Style Veggie Pizza')

      return pizza
    } else if (item === 'clam') {
      const pizza = new ClamPizza(ingredientFactory)
      pizza.setName('Chicago Style Clam Pizza')

      return pizza
    } else if (item === 'pepperoni') {
      const pizza = new PepperoniPizza(ingredientFactory)
      pizza.setName('Chicago Style Pepperoni Pizza')

      return pizza
    }

    throw new Error('Invalid Pizza Item Type')
  }
}

export { ChicagoPizzaStore }
