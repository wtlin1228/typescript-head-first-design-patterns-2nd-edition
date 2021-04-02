interface Subject {
  registerObserver(o: Observer): void
  removeObserver(o: Observer): void
  notifyObservers(): void
}

interface Observer {
  update(): void
}

interface DisplayElement {
  display(): void
}

export { Subject, Observer, DisplayElement }
