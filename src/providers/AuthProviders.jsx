import React, { createContext } from 'react'
import { useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signOut, GithubAuthProvider  } from 'firebase/auth';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const signInWithGitHub = () => {
    return signInWithPopup(auth, githubProvider);
  }

  const Logout = () => {
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
      console.log("currentUser ", currentUser)
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
      unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn, 
    signInWithGoogle,
    signInWithGitHub,
    Logout,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders