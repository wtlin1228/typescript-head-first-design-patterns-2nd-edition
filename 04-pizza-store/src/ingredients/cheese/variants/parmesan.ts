import { Cheese } from '../interface'

class ParmesanCheese implements Cheese {
  toString(): string {
    return 'Shredded Parmesan'
  }
}

export { ParmesanCheese }
