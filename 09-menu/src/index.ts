import DinerMenu from './menu/variants/diner-menu'
import MenuItem from './menu/menu-item'
import PancakeHouseMenu from './menu/variants/pancake-house-menu'

class Waitress {
  private dinerMenu: DinerMenu
  private pancakeHouseMenu: PancakeHouseMenu

  constructor(dinerMenu: DinerMenu, pancakeHouseMenu: PancakeHouseMenu) {
    this.dinerMenu = dinerMenu
    this.pancakeHouseMenu = pancakeHouseMenu
  }

  printMenu(): void {
    const dinerIterator = this.dinerMenu.createIterator()
    this._printMenu(dinerIterator)

    console.log('\n')

    const pancakeHouseIterator = this.pancakeHouseMenu.createIterator()
    this._printMenu(pancakeHouseIterator)
  }

  private _printMenu(iterator: Iterator<MenuItem, any, MenuItem>): void {
    let next = iterator.next()
    while (!next.done) {
      console.log(
        `${next.value.getName()}, ${next.value.getPrice()} -- ${next.value.getDescription()}`
      )
      next = iterator.next()
    }
  }
}

function main() {
  const dinerMenu = new DinerMenu()
  const pancakeHouseMenu = new PancakeHouseMenu()
  const waitress = new Waitress(dinerMenu, pancakeHouseMenu)

  waitress.printMenu()
}

main()
