import { Dough } from '../interface'

class ThickCrustDough implements Dough {
  toString(): string {
    return 'ThickCrust style extra thick crust dough'
  }
}

export { ThickCrustDough }
