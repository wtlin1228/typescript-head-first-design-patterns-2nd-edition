import { Pizza } from '../../../abstract'

class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super()
    this.name = 'Chicago Style Deep Dish and Clam Pizza'
    this.dough = 'Extra Thick Crust Dough'
    this.sauce = 'Plum Tomato Sauce'

    this.toppings.push('Shredded Mozzarella Cheese')
  }

  cut(): void {
    console.log(`Cutting the pizza into square slices`)
  }
}

export { ChicagoStyleClamPizza }
