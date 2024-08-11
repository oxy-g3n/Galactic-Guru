import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    amPm: 'AM',
    concerns: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to a server
  };

  return (
    <Container className="contact-container">
      <h2 className="text-center mb-4">Contact Us</h2>
        <h4 className="text-center mb-4">Send us your queries and we'll get back to you!</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Birth Time</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  required
                  className="me-2"
                />
                <Form.Select
                  name="amPm"
                  value={formData.amPm}
                  onChange={handleChange}
                >
                  <option>AM</option>
                  <option>PM</option>
                </Form.Select>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Birth Place</Form.Label>
          <Form.Control
            type="text"
            name="birthPlace"
            value={formData.birthPlace}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Concerns</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="concerns"
            value={formData.concerns}
            onChange={handleChange}
            placeholder="e.g., Study, Marriage, Love/Arrange marriage, Job/Business, Growth, Child, Foreign, Health, Spirituality, Legal matters, Property"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
      <div className="social-links mt-4">
        <a href="#" className="social-icon"><FaFacebook /></a>
        <a href="#" className="social-icon"><FaInstagram /></a>
        <a href="mailto:example@example.com" className="social-icon"><FaEnvelope /></a>
        <a href="tel:+1234567890" className="social-icon"><FaPhone /></a>
      </div>
    </Container>
  );
};

export default Contact;