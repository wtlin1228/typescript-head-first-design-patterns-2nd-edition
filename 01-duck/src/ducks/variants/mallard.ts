import { Duck } from '../abstract'
import { FlyWithWings } from '../behaviors/fly'
import { Quack } from '../behaviors/quack'

class MallardDuck extends Duck {
  constructor() {
    super(new Quack(), new FlyWithWings())
  }

  display() {
    console.log("I'm a real Mallard duck")
  }
}

export { MallardDuck }
