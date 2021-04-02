import { DisplayElement, Observer } from '../interfaces'
import { WeatherData } from '../weather-data'

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number
  private humidity: number
  private weatherData: WeatherData

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    this.temperature = 0
    this.humidity = 0
    this.register()
  }

  update(): void {
    this.temperature = this.weatherData.getTemperature()
    this.humidity = this.weatherData.getHumidity()
    this.display()
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity} % humidity`
    )
  }

  unRegister(): void {
    this.weatherData.removeObserver(this)
  }

  register(): void {
    this.weatherData.registerObserver(this)
  }
}

export { CurrentConditionsDisplay }
