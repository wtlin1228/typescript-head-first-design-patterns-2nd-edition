import { Duck } from '../abstract'
import { FlyNoWay } from '../behaviors/fly'
import { Quack } from '../behaviors/quack'

class ModelDuck extends Duck {
  constructor() {
    super(new Quack(), new FlyNoWay())
  }

  display() {
    console.log("I'm a model duck")
  }
}

export { ModelDuck }
