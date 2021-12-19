import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Firebase/useFirebase';

const Login = () => {
    const {googleSignIn, user, isLoading, setIsLoading, setUser,error, setError} = useFirebase();
    const location = useLocation();
    const Navigate = useNavigate();
    let from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = () =>{
        googleSignIn()
        .then(result =>{
            setIsLoading(false)
            setUser(result.user)
            saveUserToDb(result.user)
            Navigate(from, { replace: true })
        })
        .catch(err=>{
            setIsLoading(false)
            setError(err.message)
            console.log(error)
        })
    }

    if(user){
        Navigate(from);
    }
    

    const saveUserToDb = (user) =>{
        const {displayName, email, photoURL} = user;
        const userObj = {displayName: displayName, email: email, photoURL: photoURL};

        fetch('http://localhost:5000/save-user', {
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
        return <div class="spinner-grow text-info d-block mx-auto my-5" role="status">
        <span class="sr-only text-center"></span>
      </div>
    }

    else{
        return (
            <div>
                {
                    user.displayName ? <h2 className='text-center my-5'>You Are Already Logged In.</h2> :
                    <>
                        <button className="btn border-2 btn-primary bg-white text-black d-block mx-auto my-5" onClick={handleLogin}> <img src={process.env.PUBLIC_URL + '/sources/google_logo.png'} className="img-fluid w-75" alt="a" /></button>
                    </>
                }
            </div>
        );
    }
};

export default Login;