import { Pizza } from '../../../abstract'

class CaliforniaStyleClamPizza extends Pizza {
  constructor() {
    super()
    this.name = 'California Style BBQ Sauce and Clam Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'BBQ Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { CaliforniaStyleClamPizza }
