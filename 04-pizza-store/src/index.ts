import { CaliforniaPizzaStore } from './stores/variants/california'
import { ChicagoPizzaStore } from './stores/variants/chicago'
import { NYPizzaStore } from './stores/variants/ny'

const nyPizzaStore = new NYPizzaStore()
nyPizzaStore.orderPizza('cheese')

const chicagoPizzaStore = new ChicagoPizzaStore()
chicagoPizzaStore.orderPizza('veggie')

const californiaPizzaStore = new CaliforniaPizzaStore()
californiaPizzaStore.orderPizza('pepperoni')
