import { Pizza } from '../pizzas/abstract'

abstract class PizzaStore {
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    console.log('\n')

    return pizza
  }

  abstract createPizza(type: string): Pizza
}

export { PizzaStore }
