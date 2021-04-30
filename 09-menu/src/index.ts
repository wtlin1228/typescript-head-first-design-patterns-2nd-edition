import DinerMenu from './menu/variants/diner-menu'
import PancakeHouseMenu from './menu/variants/pancake-house-menu'
import Menu from './menu/menu'

class Waitress {
  printMenu(menu: Menu): void {
    this._printMenu(menu)
  }

  private _printMenu(menu: Menu): void {
    for (let menuItem of menu) {
      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      )
    }
    console.log('\n')
  }
}

function main() {
  const dinerMenu = new DinerMenu()
  const pancakeHouseMenu = new PancakeHouseMenu()
  const waitress = new Waitress()

  waitress.printMenu(dinerMenu)
  waitress.printMenu(pancakeHouseMenu)
}

main()
