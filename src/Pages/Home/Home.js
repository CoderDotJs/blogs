import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container className="py-5">
                <Row className="gx-5">
                    <Col className="d-flex justify-content-end">
                        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="instructor" />
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-start">
                        <div >
                        <h1>Become an Blog Writter</h1>
                        <p>Blog writters from around the world teach millions of topics. We provide the tools and skills to teach what you love and get paid for it.</p>
                        <Button className="btn-dark">Start Today</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
            <Container className="py-5">
                <Row className="gx-5">
                    <Col className="d-flex flex-column justify-content-center align-items-start">
                        
                        <h1>Transform your life through quality readings</h1>
                        <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <Button className="btn-dark">Find Out More</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <img src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt="instructor" />
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default Home;