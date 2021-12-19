import React, { useEffect, useState } from 'react';
import './Blogs.css';

const Blogs = () => {


    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch(`https://blogs-10.herokuapp.com/all-blogs`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])


    return (
        <div>
            <h1 className='text-center my-5'>Blogs</h1>

            


<section className="my-5 container mx-auto ">
  {/* <div className="container"> */}
  
  <div className="row">
 
      {
                blogs.map(blog => {

                    if(blog.category === 'web-design'){
                        blog.category = 'Web Design'
                    }

                    return (
                        <div className="col-md-4 gy-5" key={blog._id}><div className="card text-white card-has-bg click-col" 
 style={{"backgroundImage":`url(${blog.image})`}}>
         <img className="card-img d-none" src={blog.image} alt={blog.title}/>
        <div className="card-img-overlay d-flex flex-column">
         <div className="card-body">
            <small className="card-meta mb-2">{blog.category}</small>
            <h4 className="card-title mt-0 "><a className='text-white' href="##">{blog.title}</a></h4>
           <small><i className="far fa-clock"></i> {blog.createdAt}</small>
          </div>
          <div className="card-footer">
           <div className="media">
  <img className="me-3 rounded-circle" src={blog.photoURL} alt={blog.name} style={{"maxWidth":"50px"}}/>
  <div className="media-body">
    <h6 className="my-0 text-white d-block">{blog.displayName}</h6>
     <small>{blog.role}</small>
  </div>
</div>
          </div>
        </div>
      </div></div>
                    )
                })
            }
  
{/* </div> */}
  
</div>
</section>

        </div>
    );
};

export default Blogs;