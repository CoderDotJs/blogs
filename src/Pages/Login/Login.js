import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';


const Login = () => {
    const {googleSignIn, user, isLoading, setIsLoading, setUser,error, setError} = useAuth();
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
                    <h5 className='text-center my-5'>Login Using Google</h5>
                        <button style={{'boxShadow': 'none'}} className="btn border-2 btn-primary bg-white  text-black d-block mx-auto my-5" onClick={handleLogin}> <img src="https://pngimg.com/uploads/google/google_PNG19644.png" className="" alt="a" width="200px"/></button>
                    </>
                }
            </div>
        );
    }
};

export default Login;