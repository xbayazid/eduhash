import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderImg from "../../header-img.png";
import CardImgThree from "../../remote.webp";
import supportImg from '../../support.webp';
import "./Home.css";

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })
  return (
    <div>
      <div>
        <Container>
          <Row className="mt-5 header">
            <Col className="w-50 mx-5 mt-5 me-auto" md={7}>
              <h5 className="header-title">Expert Instruction</h5>
              <h1 className="fw-bold">
                Convenient easy way of learning new skills!
              </h1>
              <p>
                The ultimate planning for busy people who want to reach their
                personal goals. Effortless comfortable eye-chatching unique
                detail
              </p>
              <button className="header-btn">Our Courses</button>
            </Col>
            <Col className="mt-3" md={4}>
              <img className="img-fluid" src={HeaderImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <div className="text-center my-5">
            <h6 className="header-title">Maximize your potentials</h6>
            <h2>Learn the secrets to Life Success</h2>
            <p>Ultimate planning solution for students</p>
          </div>
          <div className="my-5">
            <Row className="text-center">
              <Col md={4}>
                <Card className="p-4 border-0 cards">
                <Card.Img className="img-fluid" variant="top" src={CardImgThree} />
                  <Card.Body>
                    <Card.Title className="fw-bold">Expert Teacher</Card.Title>
                    <Card.Text>
                      Develop skills for career of various majors including
                      computer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="p-4 border-0 cards">
                  <Card.Img className="img-fluid" variant="top" src={CardImgThree} />
                  <Card.Body>
                    <Card.Title  className="fw-bold card-title">
                      Self Development
                    </Card.Title>
                    <Card.Text>
                      Develop skills for career of various majors including
                      language
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="p-4 border-0 cards">
                <Card.Img className="img-fluid" variant="top" src={CardImgThree} />
                  <Card.Body>
                    <Card.Title className="fw-bold">Remote Learning</Card.Title>
                    <Card.Text>
                      Develop skills for career of various majors including
                      language
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div>
        <Container className="my-5">
            <h5 className="header-title">Popular Courses</h5>
            <div className="d-flex justify-content-between">
                <div>
                    <h2>Popular Online Courses Around You</h2>
                    <p>The ultimate planning solution for busy women who want to reach their personal goals</p>
                </div>
                <div>
                <button className="header-btn">Our Courses</button>
                </div>
            </div>
            <div className="mt-4">
            <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div>
                <div>
                    <button className="course-btn" size="sm">Join Now</button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
            </div>
        </Container>
      </div>
      <div>
        <Container>
            <Row>
                <Col md={5}>
                    <img className="img-fluid" src={supportImg} alt="" />
                </Col>
                <Col className="mt-5 support-text" md={5}>
                    <h2 className=""><span className="text-primary support-title">Zoom Video</span> Support Session</h2>
                    <p className="support-description support-text mt-3"><span className="text-dark">Zoom</span> is integrated into EduHash to help schools, organizations to enhance their online programs. Learners can access to online high-quality video sessions through desktop and mobile. You can simply connect with <span className="text-dark">Zoom Meetings directly</span> from your LMS.</p>
                </Col>
            </Row>
        </Container>
      </div>
      <div className="my-5 text-center subscription">
        <Container>
            <h1>Subscribe Now Forget 20% Discount Every Courses</h1>
            <p>Why are you waiting? Get connected with us & get special offers</p>
            <div className="">
                <div className="">
                    <input className="px-5 py-3" type="email" name="email" id="" placeholder="Your Email" />
                    <button className="ms-4 py-3 px-5 border-0 bg-dark text-light">Subscribe</button>
                </div>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
