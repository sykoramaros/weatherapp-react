import axios from "axios"

export const getWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://waeatherapp-java-spring.up.railway.app/weather/${location}`
    )
    return response.data
  } catch (error) {
    console.error("Error fetching weather data:", error)
  }
}
