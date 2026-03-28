import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user in firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //     return user;
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage, errorCode);
    //     throw error;
    //   });
  };

  // login user in firebase

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign with google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signInGoogle,
    logOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
