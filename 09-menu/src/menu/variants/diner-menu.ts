import DinerMenuIterator from '../../iterators/diner-menu-iterator'
import Menu from '../menu'
import MenuItem from '../menu-item'

class DinerMenu extends Menu {
  private MAX_ITEMS = 6
  private numberOfItems = 0
  private menuItems: MenuItem[] = []

  constructor() {
    super()
    const menuItems = [
      {
        name: 'Vegetarian BLT',
        description: "(Fakin') Bacon with lettuce & tomato on whole wheat",
        vegetarian: true,
        price: 2.99,
      },
      {
        name: 'BLT',
        description: 'Bacon with lettuce & tomato on whole wheat',
        vegetarian: false,
        price: 2.99,
      },
      {
        name: 'Soup of the day',
        description: 'Soup of the day, with a side of potato salad',
        vegetarian: false,
        price: 3.29,
      },
      {
        name: 'Hotdog',
        description:
          'A hot dog, with sauerkraut, relish, onions, topped with cheese',
        vegetarian: false,
        price: 3.05,
      },
    ]

    menuItems.forEach(({ name, description, vegetarian, price }) =>
      this.addItem(name, description, vegetarian, price)
    )
  }

  createIterator(): Iterator<MenuItem, any, MenuItem> {
    return new DinerMenuIterator(this.menuItems)
  }

  [Symbol.iterator]() {
    return new DinerMenuIterator(this.menuItems)
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    if (this.menuItems.length >= this.MAX_ITEMS) {
      console.error("Sorry, menu is full! Can't add item to menu")
    }
    this.menuItems.push(new MenuItem(name, description, vegetarian, price))
    this.numberOfItems = this.numberOfItems + 1
  }
}

export default DinerMenu
