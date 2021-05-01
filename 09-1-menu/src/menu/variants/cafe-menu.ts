import MenuIterator from '../../iterators/menu-iterator'
import Menu from '../menu'
import MenuItem from '../menu-item'

class CafeMenu extends Menu {
  private menuItems: Record<string, MenuItem> = {}

  constructor() {
    super()
    this.addItem(
      'Veggie Burger and Air Fries',
      'Veggie burger on a whole wheat bun, lettuce, tomato and fries',
      true,
      3.99
    )
    this.addItem(
      'Soup of the day',
      'A cup of the soup of the day, with a side salad',
      false,
      3.69
    )
    this.addItem(
      'Burrito',
      'A large burrito, with whole pinto beans, salsa and guacamole',
      true,
      4.29
    )
  }

  [Symbol.iterator]() {
    return new MenuIterator(Object.values(this.menuItems))
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price)
    this.menuItems[name] = menuItem
  }
}

export default CafeMenu
