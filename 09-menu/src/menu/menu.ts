import MenuItem from './menu-item'

abstract class Menu {
  abstract [Symbol.iterator](): Iterator<MenuItem>
}

export default Menu
