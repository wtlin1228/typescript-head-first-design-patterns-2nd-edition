import { Veggies } from '../interface'

class Mushroom implements Veggies {
  toString(): string {
    return 'Mushrooms'
  }
}

export { Mushroom }
