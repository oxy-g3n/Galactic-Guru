import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match!');
        setShowAlert(true);
        return;
      }

      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate('/'); // Navigate to the Home page after registration
        }, 3000);
      } catch (error) {
        console.error('Error registering:', error);
        setErrorMessage('Registration failed! Please try again.');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } finally {
        setIsRegistering(false);
      }
    }
  };



  return (
    <Container className="register-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center text-white mb-4">Register</h2>
          {showAlert && (
            <Alert variant={errorMessage ? 'danger' : 'success'}>
              {errorMessage || 'Registration Successful! Redirecting...'}
            </Alert>
          )}
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isRegistering}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isRegistering}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={isRegistering}
            >
              {isRegistering ? 'Signing Up...' : 'Sign Up'}
            </Button>

            <div className="text-center mt-3">
              <Link to="/" className="text-center text-sm hover-underline">
                Already have an account? Continue
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
