import MenuItem from '../../menu/menu-item'
import MyIterator from '../my-iterator'

// The implementation is exactly the same with DinerMenuIterator
// because there is only one Array in JavaScript world.
class PancakeHouseMenuIterator implements MyIterator<MenuItem> {
  private items: MenuItem[]
  private position: number

  constructor(items: MenuItem[]) {
    this.items = items
    this.position = 0
  }

  next(): MenuItem {
    const result = this.items[this.position]
    this.position = this.position + 1
    return result
  }

  hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === undefined
    ) {
      return false
    }
    return true
  }
}

export default PancakeHouseMenuIterator