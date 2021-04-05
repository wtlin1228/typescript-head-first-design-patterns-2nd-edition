import { Cheese } from '../interface'

class MozzarellaCheese implements Cheese {
  toString(): string {
    return 'Shredded Mozzarella'
  }
}

export { MozzarellaCheese }
