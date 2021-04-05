import { Pizza } from '../../../abstract'

class NYStyleClamPizza extends Pizza {
  constructor() {
    super()
    this.name = 'NY Style Sauce and Clam Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { NYStyleClamPizza }
