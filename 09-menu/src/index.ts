import DinerMenu from './menu/variants/diner-menu'
import MenuItem from './menu/menu-item'
import PancakeHouseMenu from './menu/variants/pancake-house-menu'
import Menu from './menu/menu'

class Waitress {
  printMenu(menu: Menu): void {
    const iterator = menu.createIterator()
    this._printMenu(iterator)
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
  const waitress = new Waitress()

  waitress.printMenu(dinerMenu)
  waitress.printMenu(pancakeHouseMenu)

  for (let item of dinerMenu) {
    console.log(item)
  }

  for (let item of dinerMenu) {
    console.log(item)
  }
}

main()
