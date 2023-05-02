import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content bg-gradient-to-r from-indigo-700 via-purple-400 to-pink-700">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Master Bari</a>
        <Link className="btn btn-ghost normal-case text-md" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-md" to="/about">About</Link>
        <Link className="btn btn-ghost normal-case text-md" to="/contact">Contact</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link className="btn btn-ghost normal-case text-md" to="/register" >Register</Link></li>
          <li><Link className="btn btn-ghost normal-case text-md" to="/login" >Login</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header