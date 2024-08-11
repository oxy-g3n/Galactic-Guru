import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="align-items-center mt-3">
        <Col xs={12} md={6} className="text-center">
          <img
            src="https://placehold.co/600x400"
            alt="Astrologer"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={6} className=" px-2">
          <h2>About the Astrologer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ultricies malesuada velit, at consectetur purus hendrerit id. Ut
            aliquam ex ut justo vestibulum, nec bibendum ligula tincidunt. Nunc
            auctor, lorem sit amet vehicula efficitur, eros libero iaculis ex,
            in bibendum lectus urna at lorem.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 px-5">
          <h3>Why and How to Use Astrology</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ultricies malesuada velit, at consectetur purus hendrerit id. Ut
            aliquam ex ut justo vestibulum, nec bibendum ligula tincidunt. Nunc
            auctor, lorem sit amet vehicula efficitur, eros libero iaculis ex,
            in bibendum lectus urna at lorem.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
