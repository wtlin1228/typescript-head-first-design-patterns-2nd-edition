import Menu from '../menu'
import MenuComponent from '../menu-component'
import MenuItem from '../menu-item'

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

const dinerMenu: MenuComponent = new Menu('DINER MENU', 'Lunch')

menuItems.forEach(({ name, description, vegetarian, price }) =>
  dinerMenu.add(new MenuItem(name, description, vegetarian, price))
)

export default dinerMenu
