import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Firebase/useFirebase';
import './Header.css';

const Header = () => {
    const {logOut, user} = useFirebase();
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
                            <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                        {user?.displayName ? <> {user.displayName} <button onClick={logOut}>Logout</button> </> :<NavLink to="/login">Login</NavLink>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;