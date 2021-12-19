import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
         // this is not found page 

         <div className="my-5  py-5 d-flex flex-column justify-content-center align-items-center">
         <h1 className="text-center fw-light">Sorry, but the page you were trying to view does not exist.</h1>

         <Link to="/" className="fw-bold text-center" style={{"textDecoration": "none"}}>Go To Home Page</Link>
     </div>
    );
};

export default NotFound404;