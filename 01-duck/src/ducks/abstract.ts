import { IFlyBehavior } from './behaviors/fly'
import { IQuackBehavior } from './behaviors/quack'

abstract class Duck {
  constructor(
    private quackBehavior: IQuackBehavior,
    private flyBehavior: IFlyBehavior
  ) {}

  abstract display(): void

  performQuack(): void {
    this.quackBehavior.quack()
  }

  performFly(): void {
    this.flyBehavior.fly()
  }

  setFlyBehavior(fb: IFlyBehavior): void {
    this.flyBehavior = fb
  }

  setQuackBehavior(qb: IQuackBehavior): void {
    this.quackBehavior = qb
  }

  swim(): void {
    console.log('All ducks float, even decoys!')
  }
}

export { Duck }
