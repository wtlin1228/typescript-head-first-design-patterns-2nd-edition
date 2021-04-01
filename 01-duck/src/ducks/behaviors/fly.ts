interface IFlyBehavior {
  fly(): void
}

class FlyWithWings implements IFlyBehavior {
  fly() {
    console.log("I'm flying")
  }
}

class FlyNoWay implements IFlyBehavior {
  fly() {
    console.log("I can't fly")
  }
}

class FlyRocketPowered implements IFlyBehavior {
  fly() {
    console.log("I'm flying with a rocket!")
  }
}

export { IFlyBehavior, FlyWithWings, FlyNoWay, FlyRocketPowered }
