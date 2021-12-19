import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';
import './AddBlogs.css';

const AddBlogs = () => { 
     // some verriables

     const { register, handleSubmit } = useForm();
     const { user, info } = useAuth();
     const navigate = useNavigate();

     const { displayName, email, photoURL } = user;

     const [service, setService] = useState({})
 
     // function on onSubmit the form 
 
     const onSubmit = data => {
         info.role ? data.role = info.role : data.role = 'Blogger';
        //  data.role = 'Blogger';
         data.displayName = displayName;
         data.email = email;
         data.photoURL = photoURL;
         setService(data)
         handleAddNewServices(data)
     }
 
    //  handle add new service 
 
     const handleAddNewServices = (data) =>{

 
         fetch('http://localhost:5000/add-blogs', {
             method: 'POST', 
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(dat => {
             if (dat.acknowledged) {
                 alert('Successfully added the service')
                 console.log(dat)
                 navigate('/dashboard')
             }
             console.log(dat)
         }).catch(err => {
             console.log(err)
            })
     }
     
 
 
     return (
 
             // add new service form 
 
         <div className="container mx-auto my-5">
            
             <div className="wrapper rounded d-flex align-items-stretch">
                 
                 <div className="contact-form mx-auto">
                     <div className="h3">Type Your Blog</div>
                     <form onSubmit={handleSubmit(onSubmit)}>
                         
                         <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                             <div className="form-group group pt-lg-2 pt-3"> 
                             <label htmlFor="title">Title</label> 
                             <input {...register("title")} type="text" name="title" className="form-control" required /> 
                             </div>
                             
                             <div className="form-group group pt-lg-2 pt-3"> 
                             <label htmlFor="image">Image</label> <input {...register("image")} type="url" name="image" className="form-control" required /> 
                             </div>

                             <div className="form-group group pt-lg-2 pt-3"> 
                             <label htmlFor="category">Category</label> <input {...register("category")} type="text" name="category" className="form-control" required /> 
                             </div>
                         </div>
                         
                         <div className="form-group pt-3"> <label htmlFor="desc">Description</label> <textarea name="desc"  {...register("desc")}  className="form-control" required ></textarea> </div>
                         
                         <div className="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                             <div className="btn btn-default"> Cancel </div>
                             <input className="btn btn-primary" type="submit"/>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
     );
};

export default AddBlogs;