import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProviders'

const Profile = () => {
    const { user } = useContext(AuthContext);
  return (
    <div className='w-50 mx-auto'>
       { user && <div>
            <img src={user.photoURL} alt=""  width="200px" />
            <h3>{user.displayName}</h3>
            <p><small>{user.email}</small></p>
        </div> }
    </div>
  )
}

export default Profile