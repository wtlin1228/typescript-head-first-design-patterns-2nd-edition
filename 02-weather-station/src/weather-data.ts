import type { Observer, Subject } from './interfaces'

class WeatherData implements Subject {
  private observers: Observer[]
  private temperature: number
  private humidity: number
  private pressure: number

  constructor() {
    this.observers = []
    this.temperature = 0
    this.humidity = 0
    this.pressure = 0
  }

  registerObserver(o: Observer): void {
    this.observers.push(o)
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter((_o) => _o !== o)
  }

  notifyObservers(): void {
    this.observers.forEach((o) => o.update())
  }

  measurementsChanged() {
    this.notifyObservers()
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }

  getTemperature() {
    return this.temperature
  }

  getHumidity() {
    return this.humidity
  }

  getPressure() {
    return this.pressure
  }
}

export { WeatherData }
