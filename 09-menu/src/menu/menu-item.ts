class MenuItem {
  private name: string
  private description: string
  private vegetarian: boolean
  private price: number

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name
    this.description = description
    this.vegetarian = vegetarian
    this.price = price
  }

  getName() {
    return this.name
  }

  getDescription() {
    return this.description
  }

  getVegetarian() {
    return this.vegetarian
  }

  getPrice() {
    return this.price
  }
}

export default MenuItem
