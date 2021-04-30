import MenuIterator from '../../iterators/menu-iterator'
import Menu from '../menu'
import MenuItem from '../menu-item'

class PancakeHouseMenu extends Menu {
  private menuItems: MenuItem[] = []

  constructor() {
    super()
    const menuItems = [
      {
        name: "K&B's Pancake Breakfast",
        description: 'Pancake with scrambled eggs and toast',
        vegetarian: true,
        price: 2.99,
      },
      {
        name: 'Regular Pancake Breakfast',
        description: 'Pancake with fried eggs and sausage',
        vegetarian: false,
        price: 2.99,
      },
      {
        name: 'Blueberry Pancakes',
        description: 'Pancake made with fresh blueberries',
        vegetarian: true,
        price: 3.49,
      },
      {
        name: 'Waffles',
        description: 'Waffles with your choice of blueberries or strawberries',
        vegetarian: true,
        price: 3.59,
      },
    ]

    menuItems.forEach(({ name, description, vegetarian, price }) =>
      this.addItem(name, description, vegetarian, price)
    )
  }

  [Symbol.iterator]() {
    return new MenuIterator(this.menuItems)
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    this.menuItems.push(new MenuItem(name, description, vegetarian, price))
  }
}

export default PancakeHouseMenu
