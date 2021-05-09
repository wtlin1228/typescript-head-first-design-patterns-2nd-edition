import { AbstractDuckFactory, CountingDuckFactory } from './ducks/factory'
import GooseAdapter from './ducks/goose-adapter'
import QuackCounter from './ducks/quack-counter'
import Quackable from './quackable/quackable'
import { Goose } from './geese'
import Flock from './quackable/flock'
import { Quackologist } from './quackable/observable'

class DuckSimulator {
  static main(): void {
    const simulator: DuckSimulator = new DuckSimulator()
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory()

    simulator.simulate(duckFactory)
  }

  simulate(duckFactory: AbstractDuckFactory): void {
    console.log(
      'Duck Simulator: With Adapter, Decorator, Factory, Composite and Iterator Patterns'
    )

    const redHeadDuck: Quackable = duckFactory.createRedHeadDuck()
    const duckCall: Quackable = duckFactory.createDuckCall()
    const rubberDuck: Quackable = duckFactory.createRubberDuck()
    const goose: Quackable = new GooseAdapter(new Goose())

    const flockOfDucks: Flock = new Flock()
    flockOfDucks.add(redHeadDuck)
    flockOfDucks.add(duckCall)
    flockOfDucks.add(rubberDuck)
    flockOfDucks.add(goose)

    const flockOfMallards: Flock = new Flock()
    flockOfMallards.add(duckFactory.createMallardDuck())
    flockOfMallards.add(duckFactory.createMallardDuck())
    flockOfMallards.add(duckFactory.createMallardDuck())
    flockOfMallards.add(duckFactory.createMallardDuck())

    flockOfDucks.add(flockOfMallards)

    console.log(`\nDuck Simulator: With Observer Pattern`)
    const quackologist: Quackologist = new Quackologist()
    flockOfDucks.registerObserver(quackologist)

    console.log(`\nDuck Simulator: Whole Flock Simulation`)
    this.simulateSingleDuck(flockOfDucks)

    console.log(`\nDuck Simulator: Mallard Flock Simulation`)
    this.simulateSingleDuck(flockOfMallards)

    console.log(`\nThe ducks quacked ${QuackCounter.getQuacks()} times`)
  }

  simulateSingleDuck(duck: Quackable) {
    duck.quack()
  }
}

DuckSimulator.main()
