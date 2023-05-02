import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      {
        user && <div className='m-3 p-3'>
          <h3>{user.displayName}</h3>
          <p><small>{user.email}</small></p>
        </div>
      }
      
    </div>
  )
}

export default Home