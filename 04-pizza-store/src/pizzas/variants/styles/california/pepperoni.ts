import { Pizza } from '../../../abstract'

class CaliforniaStylePepperoniPizza extends Pizza {
  constructor() {
    super()
    this.name = 'California Style BBQ Sauce and Pepperoni Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'BBQ Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { CaliforniaStylePepperoniPizza }
