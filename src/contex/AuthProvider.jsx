import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const SignInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const signOutUser = ()=>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      console.log('state caputured',currentUser)
      setLoading(false)
    })
    return () =>{
      unsubscribe();
    }
  })

  const authInfo = {
    user,
    loading,
    createUser,
    SignInUser,
    signOutUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;