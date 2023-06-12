import React, { createContext, useEffect, useState } from 'react';
import {   GoogleAuthProvider,  TwitterAuthProvider,  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null);

const auth = getAuth(app);



const googleProvider = new GoogleAuthProvider();

const twitterProvider = new TwitterAuthProvider();





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
    

    const signInWithTwitter = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }
    
   
  
  
   

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('log in user inside the auth state observer', loggedUser)
            setUser(loggedUser);


            if(loggedUser){
                axios.post('https://sports-academies-server-nu.vercel.app/jwt', {email: loggedUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                console.log('nothing');
                localStorage.removeItem('access-token')
            }



       
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithTwitter
       
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;