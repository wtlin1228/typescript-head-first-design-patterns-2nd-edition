import Quackable from '../quackable/quackable'
import Observable, { QuackObserver } from '../quackable/observable'

class MallardDuck implements Quackable {
  private observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  toString(): string {
    return 'Mallard Duck'
  }

  quack(): void {
    console.log('Quack')
    this.notifyObservers()
  }

  registerObserver(observer: QuackObserver): void {
    this.observable.registerObserver(observer)
  }

  notifyObservers(): void {
    this.observable.notifyObservers()
  }
}

class RedHeadDuck implements Quackable {
  private observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  toString(): string {
    return 'RedHead Duck'
  }

  quack(): void {
    console.log('Quack')
    this.notifyObservers()
  }

  registerObserver(observer: QuackObserver): void {
    this.observable.registerObserver(observer)
  }

  notifyObservers(): void {
    this.observable.notifyObservers()
  }
}

class DuckCall implements Quackable {
  private observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  toString(): string {
    return 'Duck Call'
  }

  quack(): void {
    console.log('Kwak')
    this.notifyObservers()
  }

  registerObserver(observer: QuackObserver): void {
    this.observable.registerObserver(observer)
  }

  notifyObservers(): void {
    this.observable.notifyObservers()
  }
}

class RubberDuck implements Quackable {
  private observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  toString(): string {
    return 'Rubber Duck'
  }

  quack(): void {
    console.log('Squeak')
    this.notifyObservers()
  }

  registerObserver(observer: QuackObserver): void {
    this.observable.registerObserver(observer)
  }

  notifyObservers(): void {
    this.observable.notifyObservers()
  }
}

export { MallardDuck, RedHeadDuck, DuckCall, RubberDuck }
