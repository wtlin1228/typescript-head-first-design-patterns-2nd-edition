import { Cheese } from '../interface'

class ReggianoCheese implements Cheese {
  toString(): string {
    return 'Reggiano Cheese'
  }
}

export { ReggianoCheese }
