import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      img: 'https://placehold.co/300x200',
      minorDesc: 'Service 1',
      briefDesc: 'This is a brief description of Service 1.',
    },
    {
      img: 'https://placehold.co/300x200',
      minorDesc: 'Service 2',
      briefDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies malesuada velit, at consectetur purus hendrerit id. Ut aliquam ex ut justo vestibulum, nec bibendum ligula tincidunt. Nunc auctor, lorem sit amet vehicula efficitur, eros libero iaculis ex, in bibendum lectus urna at lorem.",
    },
    {
      img: 'https://placehold.co/300x200',
      minorDesc: 'Service 3',
      briefDesc: 'This is a brief description of Service 3.',
    },
    {
      img: 'https://placehold.co/300x200',
      minorDesc: 'Service 4',
      briefDesc: 'This is a brief description of Service 4.',
    },
    {
      img: 'https://placehold.co/300x200',
      minorDesc: 'Service 5',
      briefDesc: 'This is a brief description of Service 5.',
    },
    {
      img: 'https://placehold.co/300x200',
      minorDesc: 'Service 6',
      briefDesc: 'This is a brief description of Service 6.',
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleShow = (service) => {
    setSelectedService(service);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container fluid className="services-container">
      <Row>
        {servicesData.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card onClick={() => handleShow(service)} className="service-card">
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Text>{service.minorDesc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        {selectedService && (
          <Modal.Body>
            <div className="modal-image">
              <img src={selectedService.img} alt="Service" className="img-fluid" />
            </div>
            <div className="modal-text">
              <h5>{selectedService.minorDesc}</h5>
              <p>{selectedService.briefDesc}</p>
            </div>
            <div className="modal-button">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </Container>
  );
};

export default Services;
