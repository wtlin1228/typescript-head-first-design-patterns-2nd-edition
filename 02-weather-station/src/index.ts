import { CurrentConditionsDisplay } from './displays/current-conditions'
import { WeatherData } from './weather-data'

const weatherData = new WeatherData()

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)
// const statisticsDisplay = new StatisticsDisplay(weatherData)
// const forecastDisplay = new ForecastDisplay(weatherData)

weatherData.setMeasurements(80, 65, 30.4)
weatherData.setMeasurements(82, 70, 29.2)
weatherData.setMeasurements(78, 90, 29.2)

currentConditionsDisplay.unRegister()
weatherData.setMeasurements(60, 90, 29.2)

currentConditionsDisplay.register()
weatherData.setMeasurements(80, 80, 30.5)
