import { Cheese } from '../../ingredients/cheese/interface'
import { MozzarellaCheese } from '../../ingredients/cheese/variants/mozzarella'
import { Clams } from '../../ingredients/clams/interface'
import { FrozenClams } from '../../ingredients/clams/variants/frozen'
import { Dough } from '../../ingredients/dough/interface'
import { ThickCrustDough } from '../../ingredients/dough/variants/thick-crust'
import { Pepperoni } from '../../ingredients/pepperoni/interface'
import { SlicedPepperoni } from '../../ingredients/pepperoni/variants/sliced'
import { Sauce } from '../../ingredients/sauce/interface'
import { PlumTomatoSauce } from '../../ingredients/sauce/variants/plum-tomato'
import { Veggies } from '../../ingredients/veggies/interface'
import { BlackOlives } from '../../ingredients/veggies/variants/black-olives'
import { Eggplant } from '../../ingredients/veggies/variants/eggplant'
import { Spinach } from '../../ingredients/veggies/variants/spinach'
import { PizzaIngredientFactory } from '../interface'

class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough()
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce()
  }

  createCheese(): Cheese {
    return new MozzarellaCheese()
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new BlackOlives(),
      new Spinach(),
      new Eggplant(),
    ]

    return veggies
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }

  createClam(): Clams {
    return new FrozenClams()
  }
}

export { ChicagoPizzaIngredientFactory }
