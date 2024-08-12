import axios from 'axios'
export async function fetchWeatherData(apiKey, location, days) {
 try {
  const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
   params: {
    key: apiKey,
    q: location,
    days: days,
   },
  })

  const data = response.data
  return {
   location: data.location.name,
   current: data.current,
   forecast: data.forecast.forecastday,
  }
 } catch (error) {
  throw new Error(`Error fetching weather data: ${error.message}`)
 }
}
