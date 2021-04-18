import Duck from './duck/interface'
import MallardDuck from './duck/mallard-duck'
import Turkey from './turkey/interface'
import WildTurkey from './turkey/wild-turkey'

class TurkeyAdapter implements Duck {
  private turkey: Turkey

  constructor(turkey: Turkey) {
    this.turkey = turkey
  }

  quack(): void {
    this.turkey.gobble()
  }

  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly()
    }
  }
}

const duck = new MallardDuck()

const turkey = new WildTurkey()
const turkeyAdapter = new TurkeyAdapter(turkey)

console.log('The Turkey says...')
turkey.gobble()
turkey.fly()

console.log('\nThe Duck says...')
testDuck(duck)

console.log('\nThe TurkeyAdapter says...')
testDuck(turkeyAdapter)

function testDuck(duck: Duck) {
  duck.quack()
  duck.fly()
}
