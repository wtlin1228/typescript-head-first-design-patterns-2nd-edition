import { FlyRocketPowered } from './ducks/behaviors/fly'
import { MallardDuck } from './ducks/variants/mallard'
import { ModelDuck } from './ducks/variants/model'

const mallard = new MallardDuck()
mallard.performQuack()
mallard.performFly()

const model = new ModelDuck()
model.performFly()
model.setFlyBehavior(new FlyRocketPowered())
model.performFly()
