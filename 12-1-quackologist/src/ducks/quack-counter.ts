import { QuackObserver } from '../quackable/observable'
import Quackable from '../quackable/quackable'

class QuackCounter implements Quackable {
  private duck: Quackable
  static numberOfQuacks: number = 0

  constructor(duck: Quackable) {
    this.duck = duck
  }

  quack(): void {
    this.duck.quack()
    QuackCounter.numberOfQuacks++
  }

  static getQuacks(): number {
    return QuackCounter.numberOfQuacks
  }

  registerObserver(observer: QuackObserver): void {
    this.duck.registerObserver(observer)
  }

  notifyObservers(): void {
    this.duck.notifyObservers()
  }
}

export default QuackCounter
