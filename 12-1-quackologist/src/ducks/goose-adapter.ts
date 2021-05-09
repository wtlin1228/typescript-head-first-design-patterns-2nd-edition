import { Goose } from '../geese'
import Observable, { QuackObserver } from '../quackable/observable'
import Quackable from '../quackable/quackable'

class GooseAdapter implements Quackable {
  private goose: Goose
  private observable: Observable

  constructor(goose: Goose) {
    this.goose = goose
    this.observable = new Observable(this)
  }

  toString(): string {
    return 'Goose pretending to be a Duck'
  }

  quack(): void {
    this.goose.honk()
    this.notifyObservers()
  }

  registerObserver(observer: QuackObserver): void {
    this.observable.registerObserver(observer)
  }

  notifyObservers(): void {
    this.observable.notifyObservers()
  }
}

export default GooseAdapter
