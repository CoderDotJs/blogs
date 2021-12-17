import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./firebase.initialization";

firebaseInitialization();



const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user !== null) {
              setIsLoading(false)
              setUser(user);
              console.log(user?.displayName)
            } else {
              setIsLoading(false)
              setUser({})
            }
          });
    }, []);

    const logOut = () =>{
        signOut(auth)
        .then((result) => {
            setUser({})
        })
        .catch((error) => {
            setError(error.message)
        });
    }



    return {
        auth,
        user,
        error,
        googleSignIn,
        logOut, 
        isLoading,
        setIsLoading,
        setUser,
        setError

    }
};

export default useFirebase;