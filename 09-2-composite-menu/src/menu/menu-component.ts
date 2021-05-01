class UnsupportedOperationException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UnsupportedOperationError'
  }
}

abstract class MenuComponent {
  /**
   * This is a composite method
   */
  add(_menuComponent: MenuComponent): void | UnsupportedOperationException {
    throw new UnsupportedOperationException('add() is unsupported')
  }

  /**
   * This is a composite method
   */
  remove(_menuComponent: MenuComponent): void | UnsupportedOperationException {
    throw new UnsupportedOperationException('remove() is unsupported')
  }

  /**
   * This is a composite method
   */
  getChild(_i: number): MenuComponent | UnsupportedOperationException {
    throw new UnsupportedOperationException('getChild() is unsupported')
  }

  /**
   * This is a operation method
   */
  getName(): string | UnsupportedOperationException {
    throw new UnsupportedOperationException('getName() is unsupported')
  }

  /**
   * This is a operation method
   */
  getDescription(): string | UnsupportedOperationException {
    throw new UnsupportedOperationException('getDescription() is unsupported')
  }

  /**
   * This is a operation method
   */
  getPrice(): number | UnsupportedOperationException {
    throw new UnsupportedOperationException('getPrice() is unsupported')
  }

  /**
   * This is a operation method
   */
  isVegetarian(): boolean | UnsupportedOperationException {
    throw new UnsupportedOperationException('isVegetarian() is unsupported')
  }

  /**
   * This is a operation method that Menu and MenuItem will implement
   */
  print(): void | UnsupportedOperationException {
    throw new UnsupportedOperationException('print() is unsupported')
  }
}

export default MenuComponent
