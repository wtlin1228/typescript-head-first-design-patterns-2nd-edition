import { Pizza } from '../../../abstract'

class CaliforniaStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'California Style BBQ Sauce and Cheese Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'BBQ Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { CaliforniaStyleCheesePizza }
