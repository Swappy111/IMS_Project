import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC= () => {
  return (
     <>
      <div className="navbar container">

        <div className="navbar-logo">
            <h2 className='logoname'>TECH-WORLD</h2>
        </div>
        <div className="navbar-right">
        <Link to={'/regis'} className='btn-Regis'>Register</Link>

        <Link to={'/login'} className='btn-login'>Login</Link>
        </div>
      </div>
     </>
  )
}

export default Navbar;
