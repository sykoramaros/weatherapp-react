import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <form className="container justify-content-center">
          <Link className="btn btn-outline-success me-2" type="button" to={"/"}>
            Home
          </Link>
          <Link
            className="btn btn-outline-success me-2"
            type="button"
            to={"/Weather"}
          >
            Weather
          </Link>
          <Link
            className="btn btn-outline-success me-2"
            type="button"
            to={"/Privacy"}
          >
            Privacy
          </Link>
        </form>
      </nav>
    </div>
  )
}

export default Navbar
