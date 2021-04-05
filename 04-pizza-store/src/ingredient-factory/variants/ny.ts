import { Cheese } from '../../ingredients/cheese/interface'
import { ReggianoCheese } from '../../ingredients/cheese/variants/reggiano'
import { Clams } from '../../ingredients/clams/interface'
import { FreshClams } from '../../ingredients/clams/variants/fresh'
import { Dough } from '../../ingredients/dough/interface'
import { ThinCrustDough } from '../../ingredients/dough/variants/thin-crust'
import { Pepperoni } from '../../ingredients/pepperoni/interface'
import { SlicedPepperoni } from '../../ingredients/pepperoni/variants/sliced'
import { Sauce } from '../../ingredients/sauce/interface'
import { MarinaraSauce } from '../../ingredients/sauce/variants/marinara'
import { Veggies } from '../../ingredients/veggies/interface'
import { Garlic } from '../../ingredients/veggies/variants/garlic'
import { Mushroom } from '../../ingredients/veggies/variants/mushroom'
import { Onion } from '../../ingredients/veggies/variants/onion'
import { RedPepper } from '../../ingredients/veggies/variants/red-pepper'
import { PizzaIngredientFactory } from '../interface'

class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough()
  }

  createSauce(): Sauce {
    return new MarinaraSauce()
  }

  createCheese(): Cheese {
    return new ReggianoCheese()
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
    ]

    return veggies
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }

  createClam(): Clams {
    return new FreshClams()
  }
}

export { NYPizzaIngredientFactory }
