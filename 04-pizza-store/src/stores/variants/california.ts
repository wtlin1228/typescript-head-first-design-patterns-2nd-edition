import { PizzaStore } from '../abstract'
import { Pizza } from '../../pizzas/abstract'
import { CaliforniaStyleCheesePizza } from '../../pizzas/variants/styles/california/cheese'
import { CaliforniaStyleVeggiePizza } from '../../pizzas/variants/styles/california/veggie'
import { CaliforniaStyleClamPizza } from '../../pizzas/variants/styles/california/clam'
import { CaliforniaStylePepperoniPizza } from '../../pizzas/variants/styles/california/pepperoni'

class CaliforniaPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    if (item === 'cheese') {
      return new CaliforniaStyleCheesePizza()
    } else if (item === 'veggie') {
      return new CaliforniaStyleVeggiePizza()
    } else if (item === 'clam') {
      return new CaliforniaStyleClamPizza()
    } else if (item === 'pepperoni') {
      return new CaliforniaStylePepperoniPizza()
    }

    throw new Error('Invalid pizza type')
  }
}

export { CaliforniaPizzaStore }
