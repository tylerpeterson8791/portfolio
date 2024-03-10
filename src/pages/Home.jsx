import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import mmaker from '../assets/images/mmaker.jpg'



export default function Home() {
  return (
    <div className="page-container press-start dark-mode">
      <Header/>
      <Container className="about-me">
        <Row>
          {/* Left side with an image */}
          <Col xs={12} md={6}>
            <img src={mmaker} alt="My Son and I with a Switch game" className="img-fluid" />
          </Col>

          {/* Right side with a heading and text block */}
          <Col xs={12} md={6}>
            
              <h1>Tyler Peterson</h1>
              
              <p>
                Always seeking knowledge.
              </p>
              
              <p>
              Loves creation and problem solving.
              </p>
              
              <p>
              Father of three.  Adventure seeker.  Junior Developer
              </p>
            
          </Col>
        </Row>
      </Container>
      <Footer className="footer-stick"/>
    </div>
  );
};