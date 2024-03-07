//I DON'T KNOW WHAT TO DO WITH THE SUBMISSIONS AS OF YET.  BUILT INFRASTRUCTURE TO HANDLE IT FOR NOW.
//MAYBE USE EMAIL SENDER?  DON'T THINK WE SHOULD USE DATABASE
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './Contact.css'; // Create a separate CSS file for styling??

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic ONCE I DECIDE REVISIT!!!
  };

  return (
    <div className="page-container">
      <Header />
      <Container className="fluid content-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Type your message here"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;