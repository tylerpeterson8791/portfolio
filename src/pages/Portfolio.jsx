import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import Project from '../components/project'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import p1Image from '../assets/images/p1.png';
import '../assets/css/portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Header />
      <Container className="fluid content-container">
        <Row>
          <Col xs={12} md={6}>
            <Project
              title="Project 1"
              image="../assets/images/p1.png"
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 2"
              image="../assets/images/p2.jpg"
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 3"
              image="../assets/images/p3.png"
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 4"
              image="../assets/images/p4.png"
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 5"
              image="../assets/images/p5.png"
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 6"
              image="../assets/images/p6.png"
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
        </Row>
        {/* Add more rows and columns for additional projects */}
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;