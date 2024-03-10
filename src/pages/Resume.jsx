import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import resumeImage from '../assets/images/resume.jpg'; // Adjust the path based on your project structure
// import './Resume.css'; // Create a separate CSS file for styling.  MAYBE???

const Resume = () => {
  return (
    <div className="page-container dark-mode">
      <Header />
      <Container className="fluid content-container">
        <Row>
          <Col xs={12}>
            <img src={resumeImage} alt="Resume" className="resume-image" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Resume;