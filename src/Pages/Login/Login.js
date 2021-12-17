import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Firebase/useFirebase';

const Login = () => {
    const {googleSignIn, user, isLoading, setIsLoading, setUser,error, setError} = useFirebase();
    const location = useLocation();
    const Navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = () =>{
        googleSignIn()
        .then(result =>{
            setIsLoading(false)
            setUser(result.user)
            Navigate(from, { replace: true })
        })
        .catch(err=>{
            setIsLoading(false)
            setError(err.message)
            console.log(error)
        })
    }

    if(isLoading === true){
        return <div> Loading User...</div>
    }

    else{
        return (
            <div>
                {
                    user.displayName 
                    ? user.displayName 
                    :
                    <>
                        <button className="btn border-2 btn-primary bg-white text-black d-block mx-auto my-5" onClick={handleLogin}> <img src={process.env.PUBLIC_URL + '/sources/google_logo.png'} className="img-fluid w-75" alt="a" /></button>
                    </>
                }
            </div>
        );
    }
};

export default Login;