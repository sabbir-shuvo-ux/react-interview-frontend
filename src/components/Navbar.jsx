import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import { GiHeartInside } from 'react-icons/gi'

const Navbar = () => {
      const navigate = useNavigate()
      const userLocal = window.localStorage.getItem("user")

      const handleLogout = () => {
            window.localStorage.removeItem("user")
            navigate("/login")
      }
      return (
            <header>
                  <div className="container">
                        <Link to='/'>
                              <h1>User List</h1>
                        </Link>
                        <button
                              className={userLocal ? "btn" : "d-none"}
                              onClick={() => handleLogout()}
                        >
                              Logout <FiLogOut />
                        </button>
                  </div>
            </header>
      )
}

export default Navbar