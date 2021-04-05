import { Pizza } from '../../../abstract'

class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super()
    this.name = 'NY Style Sauce and Pepperoni Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { NYStylePepperoniPizza }
