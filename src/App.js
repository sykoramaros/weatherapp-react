import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Layout from "./Pages/Layout/Layout"
import Home from "./Pages/Home/Home"
import Weather from "./Pages/Weather/Weather"
import Privacy from "./Pages/Privacy/Privacy"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
