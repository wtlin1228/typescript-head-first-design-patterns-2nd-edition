import MenuItem from '../menu/menu-item'

// The implementation is exactly the same with DinerMenuIterator
// because there is only one Array in JavaScript world.
class PancakeHouseMenuIterator implements Iterator<MenuItem, any, MenuItem> {
  private items: MenuItem[]
  private position: number

  constructor(items: MenuItem[]) {
    this.items = items
    this.position = 0
  }

  next(): IteratorResult<MenuItem> {
    const result = this.items[this.position]
    this.position = this.position + 1
    return {
      done: this.position > this.items.length,
      value: result,
    }
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