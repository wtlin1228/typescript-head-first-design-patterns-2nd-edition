import { Sauce } from '../interface'

class PlumTomatoSauce implements Sauce {
  toString(): string {
    return 'Tomato sauce with plum tomatoes'
  }
}

export { PlumTomatoSauce }
