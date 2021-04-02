import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/coffee-cup.png"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const initialState = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }

  const [navbar, setNavbar] = useState(initialState)

  const navbarHandler = () => {
    navbar.navbarOpen
      ? setNavbar({
          ...navbar,
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : setNavbar({
          ...navbar,
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="coffee-shop logo" className="logo img-fluid" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={navbar.css}>
        <ul className="navbar-nav mx-auto">
          {navbar.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
