import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderImg from '../../header-img.png';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Container>
                    <Row className='mt-5 header'>
                        <Col className='w-50 mx-5 mt-5 me-auto' md={7}>
                          <h5 className='header-title'>Expert Instruction</h5>
                          <h1 className="fw-bold">Convenient easy way of learning new skills!</h1>
                          <p>The ultimate planning for busy people who want to reach their personal goals. Effortless comfortable eye-chatching unique detail</p>
                          <button className='header-btn'>Our Courses</button>
                        </Col>
                        <Col className='mt-3' md={4}>
                        <img className='img-fluid' src={HeaderImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    
                </Container>
            </div>
        </div>
    );
};

export default Home;