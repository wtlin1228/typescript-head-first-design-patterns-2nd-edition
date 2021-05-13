interface IQuackBehavior {
  quack(): void
}

class Quack implements IQuackBehavior {
  quack(): void {
    console.log('Quack')
  }
}

class MuteQuack implements IQuackBehavior {
  quack(): void {
    console.log('<< Silence >>')
  }
}

class Squeak implements IQuackBehavior {
  quack(): void {
    console.log('Squeak')
  }
}

export { IQuackBehavior, Quack, MuteQuack, Squeak }
