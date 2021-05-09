import { QuackObservable, QuackObserver } from './observable'

interface Quackable extends QuackObservable {
  quack(): void
  registerObserver(observer: QuackObserver): void
  notifyObservers(): void
}

export default Quackable
