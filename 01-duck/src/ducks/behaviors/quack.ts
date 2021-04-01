interface IQuackBehavior {
  quack(): void
}

class Quack implements IQuackBehavior {
  quack() {
    console.log('Quack')
  }
}

class MuteQuack implements IQuackBehavior {
  quack() {
    console.log('<< Silence >>')
  }
}

class Squeak implements IQuackBehavior {
  quack() {
    console.log('Squeak')
  }
}

export { IQuackBehavior, Quack, MuteQuack, Squeak }
