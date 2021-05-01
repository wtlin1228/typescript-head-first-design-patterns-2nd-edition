import MenuComponent from './menu-component'

class MenuItem extends MenuComponent {
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
    super()
    this.name = name
    this.description = description
    this.vegetarian = vegetarian
    this.price = price
  }

  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  getPrice(): number {
    return this.price
  }

  isVegetarian(): boolean {
    return this.vegetarian
  }

  print(): void {
    console.log(
      [
        ` ${this.getName()}`,
        `${this.isVegetarian() ? '(v)' : ''}`,
        `, ${this.getPrice()}`,
        '\n',
        `     -- ${this.getDescription()}`,
      ].join('')
    )
  }
}

export default MenuItem
