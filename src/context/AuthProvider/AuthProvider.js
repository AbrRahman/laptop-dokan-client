import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    // const user = { displayName: "Ab Rhaman" }
    const auth = getAuth(app)
    // signup Width email password
    const signUpWidthEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        signUpWidthEmailPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;