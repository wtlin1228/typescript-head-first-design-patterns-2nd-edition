import Duck from './interface'

class MallardDuck implements Duck {
  quack(): void {
    console.log('quack')
  }

  fly(): void {
    console.log("I'm flying")
  }
}

export default MallardDuck
