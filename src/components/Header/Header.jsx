import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
  const { user, Logout } = useContext(AuthContext);

  const handleSignOut = event => {
    event.preventDefault();
    Logout()
      .then(result => {
        console.log(result);
      })
      .catch(error =>{
        console.log(error.message)
      });
  }

  return (
    <div className="navbar bg-primary text-primary-content bg-gradient-to-r from-indigo-700 via-purple-400 to-pink-700">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Master Bari</a>
        <Link className="btn btn-ghost normal-case text-md" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-md" to="/about">About</Link>
        <Link className="btn btn-ghost normal-case text-md" to="/contact">Contact</Link>
      </div>
      <div className="flex-none">
        { !user ? <ul className="menu menu-horizontal px-1">
            <li><Link className="btn btn-ghost normal-case text-md" to="/register" >Register</Link></li>
            <li><Link className="btn btn-ghost normal-case text-md" to="/login" >Login</Link></li>
          </ul> : 
          user && <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-300 rounded-box w-52">
              <li>
                <Link className="justify-between" to="/profile" >
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/settings" >Settings</Link></li>
              <li><Link to="/logout" onClick={handleSignOut} >Logout</Link></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Header