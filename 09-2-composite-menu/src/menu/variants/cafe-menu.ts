import Menu from '../menu'
import MenuComponent from '../menu-component'
import MenuItem from '../menu-item'

const menuItems = [
  {
    name: 'Veggie Burger and Air Fries',
    description:
      'Veggie burger on a whole wheat bun, lettuce, tomato and fries',
    vegetarian: true,
    price: 3.99,
  },
  {
    name: 'Soup of the day',
    description: 'A cup of the soup of the day, with a side salad',
    vegetarian: false,
    price: 3.69,
  },
  {
    name: 'Burrito',
    description: 'A large burrito, with whole pinto beans, salsa and guacamole',
    vegetarian: true,
    price: 4.29,
  },
]

const cafeMenu: MenuComponent = new Menu('CAFE MENU', 'Dinner')

menuItems.forEach(({ name, description, vegetarian, price }) =>
  cafeMenu.add(new MenuItem(name, description, vegetarian, price))
)

export default cafeMenu
