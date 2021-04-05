import { Pizza } from '../../../abstract'

class NYStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'NY Style Sauce and Cheese Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { NYStyleCheesePizza }
