import React from "react"
import { useState, useEffect } from "react"
import { getWeather } from "../../Services/WeatherService/GetWeather"
import "bootstrap/dist/css/bootstrap.min.css"
import { Popover } from "bootstrap/dist/js/bootstrap.bundle.min"

const Weather = () => {
  const [location, setLocation] = useState("")
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather(location)
        setWeatherData(data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching weather data:", error)
      }
    }
    fetchWeather()
  }, [location])

  useEffect(() => {
    // Inicializace popoverů
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    )
    popoverTriggerList.forEach((popoverTriggerEl) => {
      new Popover(popoverTriggerEl)
    })
  }, [])

  return (
    <div className="container mt-4">
      <button
        type="button"
        className="btn btn-lg btn-success mx-auto d-block"
        data-bs-toggle="popover"
        data-bs-title="Popover title"
        data-bs-content="Searching is working for these locations: Ulaanbaatar, Hovsgol, Soul, Gujarat, Maharashtra, Kashmir, Lima, Lukla, Almaty, Geraldton, Bandundu, Ushuaia, Inuvik, Chiba, Suncheon, Coventry."
      >
        Click for info
      </button>
      <div className="input-group mb-3 w-75 mx-auto mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter location"
          aria-label="Enter location"
          aria-describedby="button-addon2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {weatherData && (
        <div className="text-center mt-4">
          <h2 className="display-4">
            Weather for:
            <br />
            <span className="fw-bold">{location}</span>
          </h2>
          <hr className="w-25 mx-auto" />
          <img
            className="img-fluid bg-transparent"
            style={{ width: "250px" }}
            src={"https:" + weatherData.icon}
          />
          <h3 className="display-5 fw-bold">
            {weatherData.weatherDescription}
          </h3>
          <br />
          <div>
            <p>
              Temperature:
              <br />
              <span className="fs-2 fw-bold" >{weatherData.temp_celsius}°C</span>
            </p>
            <p>
              Humidity:
              <br />
              <span className="fs-2 fw-bold">{weatherData.humidity}%</span>
            </p>
            <p>
              Location time:
              <br />
              <span className="fs-2 fw-bold">{weatherData.timestamp}</span>
            </p>
            <p>
              Wind speed:
              <br />
              <span className="fs-2 fw-bold">
                {Math.round(weatherData.windSpeed_mps * 100) / 100} km/h
              </span>
            </p>
            <p>
              Wind direction:
              <br />
              <span className="fs-2 fw-bold">{weatherData.windDirection}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
