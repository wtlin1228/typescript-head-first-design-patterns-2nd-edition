import { PizzaStore } from '../abstract'
import { Pizza } from '../../pizzas/abstract'
import { NYStyleCheesePizza } from '../../pizzas/variants/styles/ny/cheese'
import { NYStyleVeggiePizza } from '../../pizzas/variants/styles/ny/veggie'
import { NYStyleClamPizza } from '../../pizzas/variants/styles/ny/clam'
import { NYStylePepperoniPizza } from '../../pizzas/variants/styles/ny/pepperoni'

class NYPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    if (item === 'cheese') {
      return new NYStyleCheesePizza()
    } else if (item === 'veggie') {
      return new NYStyleVeggiePizza()
    } else if (item === 'clam') {
      return new NYStyleClamPizza()
    } else if (item === 'pepperoni') {
      return new NYStylePepperoniPizza()
    }

    throw new Error('Invalid pizza type')
  }
}

export { NYPizzaStore }
