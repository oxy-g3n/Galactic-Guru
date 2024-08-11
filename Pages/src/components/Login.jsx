import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import './Login.css';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => 
    {
    e.preventDefault();

    // Simulate the JSON response from the server (commented out the real fetch part)
    /*
    const response = await fetch('http://127.0.0.1:5000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    */

    // Simulated response data
    const data = { username: username};

    // const data = await doSignInWithEmailAndPassword(username, password);

    // setSuccess(data.success);
    // console.log(data);
    






    try {
        const userCredential = await doSignInWithEmailAndPassword(username, password);
        // Handle successful login
        setSuccess(true);
        setShowAlert(true);
        // console.log('User signed in:', userCredential.user);
        setTimeout(() => {
            setShowAlert(false);
            localStorage.setItem("user", data.username);
            navigate('/Home'); // Navigate to the Home page after 500ms
            
          }, 2500);
      } catch (error) {
        // Handle errors here
        console.error('Error signing in:', error);
        setSuccess(false);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false); // Hide alert after 2 seconds if login fails
          }, 5000);
      }
  };
  const onGoogleSignIn = async (e1) => {
    e1.preventDefault()
    if (!isSigningIn) {
        setIsSigningIn(true)

        const data = { username: username};

        try {
            const userCredential = await doSignInWithGoogle();
            // Handle successful login
            setSuccess(true);
            setShowAlert(true);
            // console.log('User signed in:', userCredential.user);
            setTimeout(() => {
                setShowAlert(false);
                localStorage.setItem("user", data.username);
                navigate('/Home'); // Navigate to the Home page after 500ms
              }, 500);
          } catch (error) {
            // Handle errors here
            console.error('Error signing in:', error);
            setSuccess(false);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false); // Hide alert after 2 seconds if login fails
              }, 5000);
          }

        setIsSigningIn(false);
    }
};
  return (
    <Container className="login-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center text-white mb-4">Login</h2>
          {showAlert && (
            <Alert variant={success ? 'success' : 'danger'}>
              {success ? 'Login Successful!' : 'Login Failed! Please check your credentials.'}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
            
           

          </Form>
          <Button 
                disabled={isSigningIn}
                onClick={(e1) => { onGoogleSignIn(e1) }}
                variant="secondary" className="w-100"
                type="submit">
                {isSigningIn ? 'Signing In...' : 'Continue with Google'}
            </Button>
            <div className="text-center mt-3">
              <Link to="/Register" className="text-center text-sm hover-underline">
                Don't have an account? Create One!
              </Link>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
