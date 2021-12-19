import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./firebase.initialization";

firebaseInitialization();



const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(null)
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [info, setInfo] = useState({});
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
              retrunRole(user);
            } else {
              setIsLoading(false)
              setUser({})
            }
          });
    }, []);

    const retrunRole = (user) =>{

        const { email } = user;

        fetch(`http://localhost:5000/db-user?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setInfo(data);
        }).catch(err => {
            console.log(err.message)
        })
    }

    // const a = retrunRole(user);
    // console.log(a)

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
        setError,
        info,
        retrunRole

    }
};

export default useFirebase;