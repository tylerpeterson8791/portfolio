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
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://formspree.io/f/xkndvqya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
  
      if (response.ok) {
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
        
        // Set messageSent to true
        setMessageSent(true);
      } else {
        console.error('Failed to submit form');
        // Handle form submission error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle fetch error
    }
  };

  return (
    <div className="page-container dark-mode press-start-white">
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

          <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
            Submit
          </Button>

          {messageSent && (
            <p>Message Sent!</p>
          )}

        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;