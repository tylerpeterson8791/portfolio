import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import Project from '../components/project'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import p1Image from '../assets/images/P1.png';
import p2Image from '../assets/images/P2.jpg';
import p3Image from '../assets/images/p3.png';
import p4Image from '../assets/images/p4.png';
import p5Image from '../assets/images/P5.png';
import p6Image from '../assets/images/p6.png';
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
              image={p1Image}
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 2"
              image={p2Image}
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 3"
              image={p3Image}
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 4"
              image={p4Image}
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 5"
              image={p5Image}
              deployedLink="https://espn.com/"
              githubLink="https://github.com/"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Project 6"
              image={p6Image}
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