import MenuComponent from './menu-component'

class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = []
  private name: string
  private description: string

  constructor(name: string, description: string) {
    super()
    this.name = name
    this.description = description
  }

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent)
  }

  remove(menuComponent: MenuComponent): void {
    this.menuComponents = this.menuComponents.filter((x) => x === menuComponent)
  }

  getChild(i: number): MenuComponent {
    return this.menuComponents[i]
  }

  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  print(): void {
    console.log(
      [
        '\n',
        `${this.getName()}, ${this.getDescription()}`,
        '\n',
        '-----------------------------',
      ].join('')
    )

    for (let menuComponent of this.menuComponents) {
      menuComponent.print()
    }
  }
}

export default Menu
