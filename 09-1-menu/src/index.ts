import DinerMenu from './menu/variants/diner-menu'
import PancakeHouseMenu from './menu/variants/pancake-house-menu'
import CafeMenu from './menu/variants/cafe-menu'
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
  const cafeMenu = new CafeMenu()

  const waitress = new Waitress()

  waitress.printMenu(dinerMenu)
  waitress.printMenu(pancakeHouseMenu)
  waitress.printMenu(cafeMenu)
}

main()
