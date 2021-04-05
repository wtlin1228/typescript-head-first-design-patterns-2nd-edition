import { Pizza } from '../../../abstract'

class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super()
    this.name = 'Chicago Style Deep Dish and Pepperoni Pizza'
    this.dough = 'Extra Thick Crust Dough'
    this.sauce = 'Plum Tomato Sauce'

    this.toppings.push('Shredded Mozzarella Cheese')
  }

  cut(): void {
    console.log(`Cutting the pizza into square slices`)
  }
}

export { ChicagoStylePepperoniPizza }
