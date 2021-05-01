import Menu from '../menu'
import MenuComponent from '../menu-component'
import MenuItem from '../menu-item'

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

const pancakeHouseMenu: MenuComponent = new Menu(
  'PANCAKE HOUSE MENU',
  'Breakfast'
)

menuItems.forEach(({ name, description, vegetarian, price }) =>
  pancakeHouseMenu.add(new MenuItem(name, description, vegetarian, price))
)

export default pancakeHouseMenu
