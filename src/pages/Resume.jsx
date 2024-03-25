import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import resumeImage from '../assets/images/resume.jpg'; // Adjust the path based on your project structure
import '../assets/css/resume.css'
import jsPDF from 'jspdf'; // Import jsPDF

const Resume = () => {
  const downloadResume = () => {
    const doc = new jsPDF();
    const width = doc.internal.pageSize.getWidth(); // Get the width of the PDF page
    const height = doc.internal.pageSize.getHeight(); // Get the height of the PDF page
    doc.addImage(resumeImage, 'JPEG', 0, 0, width, height); // Add the image to cover the entire page
    doc.save("Tyler_Peterson_Resume.pdf"); // Save the PDF
  };

  return (
    <div className="page-container dark-mode">
      <Header />
      <Container className="fluid content-container">
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <img src={resumeImage} alt="Resume" className="resume-image"/>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={12} className="text-center mt-4">
            <Button variant="primary" onClick={downloadResume}>Download PDF</Button>
          </Col>
        </Row> */}
      </Container>
      <Footer />
    </div>
  );
};

export default Resume;