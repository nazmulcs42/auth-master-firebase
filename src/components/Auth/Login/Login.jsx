import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from '../../../providers/AuthProviders';


const Login = () => {
  const { user, signIn, signInWithGitHub, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const emailRef = useRef();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const handleGitHubSignIn = () => {
    signInWithGitHub()
    .then(result => {
      console.log(result)
      
    }).catch(error => {
      console.log(error)
    });
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        if(!loggedUser.emailVerified) {
          setError("Please verify your email address first.");
          return;
        }
        setError('');
        event.target.reset();
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      })
  }

  const handleForgotPassword = () => {
    const resetEmail = emailRef.current.value;
    if(!resetEmail) {
      setError("Please provide an email address.");
      return;
    }
    sendPasswordResetEmail(auth, resetEmail)
    .then(res => {
      setError('')
      alert("Please check your email address."); 
    })
    .catch(err => {
      setError(err.message)
      console.log(err.message)
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
            <form onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email'  ref={emailRef} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <Link to="/register" className="label-text-alt link link-hover" >New to this site?</Link>
                  <a href="javascript:void(0)" className="label-text-alt link link-hover" onClick={handleForgotPassword}>Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className='d-flex'>
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 m-1" onClick={handleGoogleSignIn}>Google Login</button>
          <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 m-1" onClick={handleGitHubSignIn}>GitHub Login</button> 
        </div>
      </div>
    </div>
  )
}

export default Login