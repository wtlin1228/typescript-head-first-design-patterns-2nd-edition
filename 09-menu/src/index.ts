import DinerMenu from './menu/variants/diner-menu'
import MenuItem from './menu/menu-item'
import MyIterator from './iterator/my-iterator'
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

  private _printMenu(iterator: MyIterator<MenuItem>): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next()
      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      )
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
