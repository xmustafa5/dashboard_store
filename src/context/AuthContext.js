import { createUserWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import {  createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase";

const AuthContext = createContext()
const AuthProvider = ({ children }) => { 
       const [ currentUser , setCurrentUser]= useState()
       const [ loading , setLoading]= useState(true)
       const logout = () =>{
        signOut()
       }
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
    <AuthContext.Provider value={{currentUser, signup, logout}}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


export const useAuth =() =>{
    return useContext(AuthContext)
}