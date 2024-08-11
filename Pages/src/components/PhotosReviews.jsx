import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PhotosReviews.css';

const PhotosReviews = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [photosPerView, setPhotosPerView] = useState(4);
  const [testimonialsPerView, setTestimonialsPerView] = useState(2);

  const photos = Array(12).fill("https://placehold.co/200x300");

  const testimonials = [
    { name: "John Doe", rating: 5, desc: "Great experience!", image: "https://placehold.co/200x300" },
    { name: "Jane Smith", rating: 4, desc: "Very satisfied with the service.", image: "https://placehold.co/200x300" },
    { name: "Bob Johnson", rating: 5, desc: "Exceeded my expectations!", image: "https://placehold.co/200x300" },
    { name: "Alice Brown", rating: 4, desc: "Would recommend to others.", image: "https://placehold.co/200x300" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setPhotosPerView(1);
        setTestimonialsPerView(1);
      } else if (window.innerWidth < 768) {
        setPhotosPerView(2);
        setTestimonialsPerView(1);
      } else if (window.innerWidth < 992) {
        setPhotosPerView(3);
        setTestimonialsPerView(2);
      } else {
        setPhotosPerView(4);
        setTestimonialsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePhotoScroll = (direction) => {
    setPhotoIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % (photos.length - photosPerView + 1);
      } else {
        return prevIndex === 0 ? photos.length - photosPerView : prevIndex - 1;
      }
    });
  };

  const handleTestimonialScroll = (direction) => {
    setTestimonialIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % (testimonials.length - testimonialsPerView + 1);
      } else {
        return prevIndex === 0 ? testimonials.length - testimonialsPerView : prevIndex - 1;
      }
    });
  };

  return (
    <Container fluid>
      <section className="photo-gallery">
        <h2>Photo Gallery</h2>
        <div className="gallery-container">
          <Button onClick={() => handlePhotoScroll('prev')} className="scroll-btn prev">&lt;</Button>
          <div className="photo-container" style={{ transform: `translateX(-${photoIndex * (100 / photosPerView)}%)` }}>
            {photos.map((photo, index) => (
              <Card key={index} className="photo-card">
                <Card.Img variant="top" src={photo} />
              </Card>
            ))}
          </div>
          <Button onClick={() => handlePhotoScroll('next')} className="scroll-btn next">&gt;</Button>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-container">
          <Button onClick={() => handleTestimonialScroll('prev')} className="scroll-btn prev">&lt;</Button>
          <div className="testimonial-wrapper" style={{ transform: `translateX(-${testimonialIndex * (100 / testimonialsPerView)}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <Card className="testimonial-card">
                  <Row noGutters>
                    <Col xs={4} md={4}>
                      <Card.Img src={testimonial.image} />
                    </Col>
                    <Col xs={8} md={8}>
                      <Card.Body>
                        <Card.Title>{testimonial.name}</Card.Title>
                        <Card.Text>{testimonial.desc}</Card.Text>
                        <Card.Text>Rating: {testimonial.rating}/5</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </div>
          <Button onClick={() => handleTestimonialScroll('next')} className="scroll-btn next">&gt;</Button>
        </div>
      </section>
    </Container>
  );
};

export default PhotosReviews;