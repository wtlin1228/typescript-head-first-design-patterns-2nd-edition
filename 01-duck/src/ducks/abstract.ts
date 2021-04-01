import { IFlyBehavior } from './behaviors/fly'
import { IQuackBehavior } from './behaviors/quack'

abstract class Duck {
  constructor(
    public quackBehavior: IQuackBehavior,
    public flyBehavior: IFlyBehavior
  ) {}

  abstract display(): void

  performQuack(): void {
    this.quackBehavior.quack()
  }

  performFly(): void {
    this.flyBehavior.fly()
  }

  setFlyBehavior(fb: IFlyBehavior) {
    this.flyBehavior = fb
  }

  setQuackBehavior(qb: IQuackBehavior) {
    this.quackBehavior = qb
  }

  swim(): void {
    console.log('All ducks float, even decoys!')
  }
}

export { Duck }
