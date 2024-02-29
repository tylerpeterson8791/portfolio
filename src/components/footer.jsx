import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <FaLinkedin size={30} />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light">
              <FaGithub size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;