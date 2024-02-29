import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/header'
import Footer from '../components/footer'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import marioImage from '../assets/images/marioImage.png';

export default function Home() {

  
  return (
    <div>
    <Header />
    <Container className='fluid'>
      <Row>
        {/* Left side with an image */}
        <Col xs={12} md={6}>
          <img src={marioImage} alt="Mario Image REPLACE" className="img-fluid" />
        </Col>
        
        {/* Right side with a heading and text block */}
        <Col xs={12} md={6}>
          <Container>
            <h1>Tyler Peterson</h1>
            <p>
              This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go.
            </p>
            <p>
              This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go.
            </p>
            <p>
              This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go. This is where a quick bio will go.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);
};