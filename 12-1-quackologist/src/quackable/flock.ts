import { QuackObserver } from './observable'
import Quackable from './quackable'

class Flock implements Quackable {
  private quackers: Quackable[] = []

  add(quacker: Quackable): void {
    this.quackers.push(quacker)
  }

  quack() {
    this.quackers.forEach((quacker) => quacker.quack())
  }

  registerObserver(observer: QuackObserver): void {
    this.quackers.forEach((quacker) => quacker.registerObserver(observer))
  }

  notifyObservers(): void {
    this.quackers.forEach((quacker) => quacker.notifyObservers())
  }
}

export default Flock
