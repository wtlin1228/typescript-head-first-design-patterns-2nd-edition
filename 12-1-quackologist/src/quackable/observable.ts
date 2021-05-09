export interface QuackObserver {
  update(duck: QuackObservable): void
}

export class Quackologist implements QuackObserver {
  update(duck: QuackObservable): void {
    console.log(`Quackologist: ${duck} just quacked`)
  }
}

export interface QuackObservable {
  registerObserver(observer: QuackObserver): void
  notifyObservers(): void
}

class Observable implements QuackObservable {
  private observers: QuackObserver[] = []
  private duck: QuackObservable

  constructor(duck: QuackObservable) {
    this.duck = duck
  }

  registerObserver(observer: QuackObserver): void {
    this.observers.push(observer)
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this.duck))
  }
}

export default Observable
