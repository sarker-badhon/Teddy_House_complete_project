import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }

    const userUpdate = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        }).then(() => { })
            .catch((error) => {
                console.log(error.message)
            });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, cuUser => {
            setLoading(false)
            setUser(cuUser)

        })

        return () => {
            unsubscribe()
        }

    }, [])

    const AuthInformation = {
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut,
        userUpdate
    }

    return (
        <AuthContext.Provider value={AuthInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;