import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

function DesCarousel() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={6} className="order-md-1 order-2">
          <hr className="hr hr-blurry" />
          <div className="info-principal">
            {/* <p>Hora de inicio: 2:00 pm</p>
            <p>Hora de finalización: 6:00 pm</p> */}
            <p className="mt-4">"Te invitamos a un evento único dirigido a estudiantes, profesores y público en general, donde nuestros futuros ingenierios presentarán sus proyectos en la Expo ingeniería."</p>
          </div>
          <hr className="hr hr-blurry" />
        </Col>
        <Col sm={12} md={6} className="order-md-2 order-1">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src = {require=('../img1.JPEG')} alt="First slide" />
              <Carousel.Caption className="carousel-caption">
                <h3>Presentación de proyectos</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src = {require=('../img2.JPEG')} alt="Second slide" />
              <Carousel.Caption>
                <h3>Panel de egresados</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src = {require=('../img3.JPEG')} alt="Third slide" />
              <Carousel.Caption>
                <h3>Evaluación de jurado</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default DesCarousel;
