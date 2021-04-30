import MenuItem from './menu-item'

abstract class Menu {
  abstract createIterator(): Iterator<MenuItem, any, MenuItem>
}

export default Menu
