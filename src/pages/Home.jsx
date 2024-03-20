import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import mmaker from '../assets/images/mmaker.jpg';

export default function Home() {
  return (
    <div className="page-container press-start-white dark-mode">
      <Header />
      <Container className="about-me">
        <Row className="align-items-center"> {/* Center the contents vertically */}
          {/* Left side with an image */}
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center"> {/* Center the image horizontally */}
              <img src={mmaker} alt="My Son and I with a Switch game" className="img-fluid" />
            </div>
          </Col>

          {/* Right side with a heading and text block */}
          <Col xs={12} md={6}>
            <div className="d-flex flex-column justify-content-center h-100"> {/* Center the contents vertically */}
              <h1 className="text-center">Tyler Peterson</h1> {/* Center the heading */}
              <p>
                Always seeking knowledge.
              </p>
              <p>
                Loves creation and problem solving.
              </p>
              <p>
                Father of three. Adventure seeker. Junior Developer
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer className="footer-stick" />
    </div>
  );
};