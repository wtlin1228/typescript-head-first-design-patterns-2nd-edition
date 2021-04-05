import { Pizza } from '../../../abstract'

class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super()
    this.name = 'NY Style Sauce and Veggie Pizza'
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export { NYStyleVeggiePizza }
