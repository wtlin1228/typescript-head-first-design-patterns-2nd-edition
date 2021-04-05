import { PizzaStore } from '../abstract'
import { Pizza } from '../../pizzas/abstract'
import { ChicagoStyleCheesePizza } from '../../pizzas/variants/styles/chicago/cheese'
import { ChicagoStyleVeggiePizza } from '../../pizzas/variants/styles/chicago/veggie'
import { ChicagoStyleClamPizza } from '../../pizzas/variants/styles/chicago/clam'
import { ChicagoStylePepperoniPizza } from '../../pizzas/variants/styles/chicago/pepperoni'

class ChicagoPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    if (item === 'cheese') {
      return new ChicagoStyleCheesePizza()
    } else if (item === 'veggie') {
      return new ChicagoStyleVeggiePizza()
    } else if (item === 'clam') {
      return new ChicagoStyleClamPizza()
    } else if (item === 'pepperoni') {
      return new ChicagoStylePepperoniPizza()
    }

    throw new Error('Invalid pizza type')
  }
}

export { ChicagoPizzaStore }
