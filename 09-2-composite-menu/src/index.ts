import Menu from './menu/menu'
import MenuComponent from './menu/menu-component'
import cafeMenu from './menu/variants/cafe-menu'
import dessertMenu from './menu/variants/dessert-menu'
import dinerMenu from './menu/variants/diner-menu'
import pancakeHouseMenu from './menu/variants/pancake-house-menu'

function main() {
  const allMenus: MenuComponent = new Menu('ALL MENUS', 'All menus combined')

  allMenus.add(pancakeHouseMenu)
  allMenus.add(dinerMenu)
  allMenus.add(cafeMenu)

  dinerMenu.add(dessertMenu)

  allMenus.print()
}

main()
