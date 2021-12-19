import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Container className="py-5">
                <Row className="gx-5">
                    <Col className="d-flex justify-content-end">
                        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="instructor" className='trust'/>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-start">
                        <div >
                        <h1>Become an Blog Writter</h1>
                        <p>Blog writters from around the world teach millions of topics. We provide the tools and skills to teach what you love and get paid for it.</p>
                        <Button className="btn-dark bg-transparent">Start Today</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center py-5 trusted" fluid>
                <h1>Trusted by companies of all sizes</h1>
                <p>
                    <img src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/apple-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="" className="trusted-img"/>
                    <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="" className="trusted-img"/>
                    
                </p>
            </Container>
            <div>
            <Container className="py-5">
                <Row className="gx-5">
                    <Col className="d-flex flex-column justify-content-center align-items-start ">
                        
                        <h1>Transform your life through quality readings</h1>
                        <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <Button className="btn-dark bg-transparent">Find Out More</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="instructor" className='trust'/>
                    </Col>
                </Row>
            </Container>

        </div>
        </div>
    );
};

export default Home;