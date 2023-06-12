import React, { createContext, useEffect, useState } from 'react';
import {   GoogleAuthProvider,    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null);

const auth = getAuth(app);



const googleProvider = new GoogleAuthProvider();







const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

   

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    

   
  
  
   

  


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
          setUser(loggedUser)
          console.log('current user', loggedUser)
          if (loggedUser) {
            axios
              .post('https://sports-academies-server-nu.vercel.app/jwt', {email: loggedUser.email})
              .then(data => {
                localStorage.setItem('access-token', data.data.token)
                setLoading(false)
              })
          } else {
            localStorage.removeItem('access-token')
          }
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        
       
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;