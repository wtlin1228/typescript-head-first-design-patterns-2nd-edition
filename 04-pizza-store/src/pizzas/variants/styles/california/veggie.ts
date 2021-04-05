import { Pizza } from '../../../abstract'

class CaliforniaStyleVeggiePizza extends Pizza {
  constructor() {
    super()
    this.name = 'California Style BBQ Sauce and Veggie Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'BBQ Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { CaliforniaStyleVeggiePizza }
