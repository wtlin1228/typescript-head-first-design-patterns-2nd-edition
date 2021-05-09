import { DuckCall, MallardDuck, RedHeadDuck, RubberDuck } from '.'
import QuackCounter from './quack-counter'
import Quackable from '../quackable/quackable'

abstract class AbstractDuckFactory {
  abstract createMallardDuck(): Quackable
  abstract createRedHeadDuck(): Quackable
  abstract createDuckCall(): Quackable
  abstract createRubberDuck(): Quackable
}

class DuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new MallardDuck()
  }
  createRedHeadDuck(): Quackable {
    return new RedHeadDuck()
  }
  createDuckCall(): Quackable {
    return new DuckCall()
  }
  createRubberDuck(): Quackable {
    return new RubberDuck()
  }
}

class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck())
  }
  createRedHeadDuck(): Quackable {
    return new QuackCounter(new RedHeadDuck())
  }
  createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall())
  }
  createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck())
  }
}

export { AbstractDuckFactory, DuckFactory, CountingDuckFactory }
