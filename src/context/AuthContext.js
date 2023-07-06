import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {  createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase";

const AuthContext =createContext({ children })
const AuthProvider = () => { 
       const [ currentUser , setCurrentUser]= useState()
       const [ loading , setLoading]= useState(true)
        const signup = (email,password) =>{
                createUserWithEmailAndPassword(auth,email,password)
        }
        useEffect(()=>{
          const unsubcribe =  onAuthStateChanged(auth,(user)=>{
                setCurrentUser(user)
                setLoading(false)
            })
            return()=>{
                unsubcribe()
            }
        },[])
  return (
    <AuthContext.Provider value={{currentUser, signup}}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


export const useAuth =() =>{
    return useContext(AuthContext)
}