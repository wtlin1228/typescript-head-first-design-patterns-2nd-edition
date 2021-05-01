import Menu from '../menu'
import MenuComponent from '../menu-component'
import MenuItem from '../menu-item'

const menuItems = [
  {
    name: 'Apple Pie',
    description: 'Apple pie with a flakey crust, topped with vanilla ice cream',
    vegetarian: true,
    price: 1.59,
  },
  {
    name: 'Cheesecake',
    description: 'Creamy New York cheesecake, with a chocolate graham crust',
    vegetarian: true,
    price: 1.99,
  },
  {
    name: 'Sorbet',
    description: 'A scoop of raspberry and a scoop of lime',
    vegetarian: true,
    price: 1.89,
  },
]

const dessertMenu: MenuComponent = new Menu(
  'DESSERT MENU',
  'Dessert of course!'
)

menuItems.forEach(({ name, description, vegetarian, price }) =>
  dessertMenu.add(new MenuItem(name, description, vegetarian, price))
)

export default dessertMenu
