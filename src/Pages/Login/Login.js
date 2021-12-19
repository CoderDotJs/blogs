import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Firebase/useFirebase';


const Login = () => {
    const {googleSignIn, user, isLoading, setIsLoading, setUser,error, setError} = useFirebase();
    const Navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";
    
    const handleLogin = () =>{
        googleSignIn()
        .then(result =>{
            setIsLoading(false)
            setUser(result.user)
            saveUserToDb(result.user)
            Navigate(from, {replace: true})
        })
        .catch(err=>{
            setIsLoading(false)
            setError(err.message)
            console.log(error)
        })
    }

    

    
    

    const saveUserToDb = (user) =>{
        const {displayName, email, photoURL} = user;
        const userObj = {displayName: displayName, email: email, photoURL: photoURL};

        fetch('https://blogs-10.herokuapp.com/save-user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                console.log('User saved successfull')
            }
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    if(isLoading === true){
        return <div className="spinner-grow text-info d-block mx-auto my-5" role="status">
        <span className="sr-only text-center"></span>
      </div>
    }

    else{
        return (
            <div>
                {
                    user.displayName ? 'No need to login' :
                    
                    <>
                        <button className="btn border-2 btn-primary bg-white text-black d-block mx-auto my-5" onClick={handleLogin}> <img src={process.env.PUBLIC_URL + '/sources/google_logo.png'} className="img-fluid w-75" alt="a" /></button>
                    </>
                }
            </div>
        );
    }
};

export default Login;