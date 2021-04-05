import { Clams } from '../interface'

class FrozenClams implements Clams {
  toString(): string {
    return 'Frozen Clams from Chesapeake Bay'
  }
}

export { FrozenClams }
