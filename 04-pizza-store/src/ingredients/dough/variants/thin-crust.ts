import { Dough } from '../interface'

class ThinCrustDough implements Dough {
  toString(): string {
    return 'Thin Crust Dough'
  }
}

export { ThinCrustDough }
