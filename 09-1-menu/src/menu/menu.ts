import MenuItem from './menu-item'

abstract class Menu implements Iterable<MenuItem> {
  abstract [Symbol.iterator](): Iterator<MenuItem>
}

export default Menu
