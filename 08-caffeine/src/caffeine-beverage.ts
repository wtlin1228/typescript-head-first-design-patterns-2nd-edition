abstract class CaffeineBeverage {
  async prepareRecipe(): Promise<void> {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (await this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }

  // Use abstract methods when your subclass MUST provide an
  // implementation of the method or step in the algorithm.
  abstract brew(): void
  abstract addCondiments(): void

  boilWater(): void {
    console.log('Boiling Water')
  }

  pourInCup(): void {
    console.log('Pouring into Cup')
  }

  // Use hooks when that part of the algorithm is optional.
  // With hooks, a subclass may choose to implement that hook,
  // but it doesn’t have to.
  customerWantsCondiments(): Promise<boolean> {
    return Promise.resolve(true)
  }
}

export default CaffeineBeverage
