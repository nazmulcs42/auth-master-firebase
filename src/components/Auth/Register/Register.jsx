import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../../../firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSeccess] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    setSeccess('');
    const email = event.target.email.value;
    const password = event.target.password.value;
    const userName = event.target.name.value;
    //validate
    if(password.length<6) {
      setError("Please add at least 6 characters.");
      return;
    }
    else if(!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase.");
      return;
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
      const loggedUser = res.user;
      setUserName(loggedUser, userName);
      console.log(loggedUser);
      setError('');
      setSeccess("Your account has been created successfully.");
      event.target.reset();
      verifyEmail(loggedUser);
    })
    .catch(err => {
      console.log(err.message);
      setSeccess('');
      setError(err.message);
    })

  }

  const setUserName = (loggedUser, userName) => {
    updateProfile(loggedUser, {
      displayName: userName
    }).then(() => {
      console.log("Profile updated")
    }).catch((error) => {
      setError(error.message);
      console.log("An error occurred. ", error.message)
    });
    
  }
  const verifyEmail = (user) => {
    sendEmailVerification(user)
    .then(res => {
      console.log(res);
      setError('');
      alert("Please verify your email address.")
    })
    .catch(err =>{
      console.log(err.message);
      setError(err.message);
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        {/* <div className="text-center lg:text-left">
          <h3 className="text-4xl font-bold">Please Login!</h3>
        </div> */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            { 
              error && <small className='text-white p-3 bg-red-500 rounded'> { error }</small> 
            }
            { 
              success && <div className='text-white p-3 bg-sky-500 rounded'> { success } </div> 
            }
            <form onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover" >Already have an account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register