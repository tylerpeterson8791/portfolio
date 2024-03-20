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
    <div className="portfolio-page dark-mode">
      <Header />
      <Container className="fluid content-container">
        <Row>
          <Col xs={12} md={6}>
            <Project
              title="MERN STACK"
              image={p1Image}
              deployedLink="https://the-legend-of-dizzy-b22681644c33.herokuapp.com/"
              githubLink="https://github.com/AHelmin/the-legend-of-dizzy"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Express-Sequelize"
              image={p2Image}
              deployedLink="https://group-1-restaurant-manager-dc017dce6dee.herokuapp.com/"
              githubLink="https://github.com/Ms-Meredith-McD/Restaurant-Management"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="MongoDB-API"
              image={p3Image}
              deployedLink="https://drive.google.com/file/d/1aYvis2bUMjdcuc85VrnOAaCiE1Y70DaC/view?pli=1"
              githubLink="https://github.com/tylerpeterson8791/social-network-api"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="MySQL"
              image={p4Image}
              deployedLink="https://drive.google.com/file/d/12yzTCUrdUazh_TnYwhQMewzwkZnPOv_r/view?usp=sharing"
              githubLink="https://github.com/tylerpeterson8791/employee-tracker"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="REACT"
              image={p5Image}
              deployedLink="https://main--tyler-peterson-portfolio.netlify.app/"
              githubLink="https://github.com/tylerpeterson8791/portfolio"
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Javascript-HTML-CSS"
              image={p6Image}
              deployedLink="https://kdelaria.github.io/bartending-school/"
              githubLink="https://github.com/KDeLaria/bartending-school"
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