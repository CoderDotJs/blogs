import React from 'react';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';
import './Header.css';

const Header = () => {
    const {logOut, user} = useAuth();
    const { info } = useAuth();
    console.log('heaer', info)
    return (
        <header>
            <Navbar bg="" expand="lg" className="text-center">
                <Container>
                    <Navbar.Brand as={NavLink} to="/"><img src={process.env.PUBLIC_URL + '/sources/google_logo.png'} className="img-fluid w-75" alt="a" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0 text-center text-black"
                        //   style={{ maxHeight: '100px' }}
                        style={{color: 'black', fontWeight: '500'}}
                        //   navbarScroll
                        >
                            <Nav.Link as={NavLink}  to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={NavLink} to="/web-design">Web Design</Nav.Link>
                            <Nav.Link as={NavLink} to="/css">Css</Nav.Link>
                            <Nav.Link as={NavLink} to="/javascript">Javascript</Nav.Link>
                            <Nav.Link as={NavLink} to="/react">React</Nav.Link>
                            {!user.email && <><Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link></>}
                        </Nav>
                        {user?.displayName ? <> 
                            <DropdownButton align="end" className="text-center" title={<img width="40px" className="rounded img-fluid rounded-circle" src={user.photoURL} alt="user_img" />} id="dropdown-menu-align-end">

                          <img width="80px" className="d-block mx-auto mb-2 rounded img-fluid rounded-circle" src={user.photoURL} alt="" />

                          <h5 className="text-center">{user.displayName}</h5>
                          <NavLink to="/profile" className="dropdown-item">My Profile</NavLink>
                          <Dropdown.Divider/>
                          <NavLink to="/dashboard" className="dropdown-item">Dashboard</NavLink>
                          <NavLink to="/write-a-blog" className="dropdown-item">Write A Blog</NavLink>
                          {info.role === 'Admin' && <NavLink to="/make-admin" className="dropdown-item">Make Admin</NavLink>}
                          <NavLink to="/notifications" className="dropdown-item">Notifications</NavLink>
                          <NavLink to="/payout" className="dropdown-item">Payout</NavLink>
                          <button type="button" onClick={logOut} className="rounded-0 px-3 btn btn-danger bg-transparent btn btn-primary border-black d-block mx-auto my-2">Logout</button>
                        </DropdownButton>
                          </> :<NavLink className="rounded-0 px-3 btn btn-primary  text-white border-black d-block mx-auto my-2 " to="/login" >Login</NavLink>}

                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;