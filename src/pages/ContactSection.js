import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const ContactSection = () => {
  return (
    <section>
      <Container fluid>
        {/* <div id="contacto">
          <h1>
            <p className="info-titulo-footer text-center">
              ¿Tienes alguna pregunta? ¡Contáctanos!
            </p>
            <div id="root"></div>
          </h1>
          <footer className="py-3 my-4">
            <Row>
              <Col className="text-center">
                <Nav justify className="border-bottom pb-3 mb-3">
                  <Nav.Item>
                    <Nav.Link href="https://www.facebook.com/cetysuniversidadtij" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook"></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="https://api.whatsapp.com/send?phone=5216643860056" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="https://www.instagram.com/cetystijuana/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="mailto:comunicaciontij@cetys.mx" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-envelope"></i>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <p className="text-center text-body-secondary">&copy; CETYS Universidad Campus Tijuana</p>
              </Col>
            </Row>
          </footer>
        </div> */}
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 ">
              <p class="text-center text-body-secondary">&copy; Instituto Educativo del Noroeste A.C.</p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-body-emphasis" href="https://www.facebook.com/cetysuniversidadtij" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a></li>
                <li class="ms-3"><a class="link-body-emphasis" href="https://api.whatsapp.com/send?phone=5216643860056" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a></li>
                <li class="ms-3"><a class="link-body-emphasis" href="https://www.instagram.com/cetystijuana/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a></li>
                <li class="ms-3"><a class="link-body-emphasis" href="mailto:comunicaciontij@cetys.mx" target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope"></i></a></li>
              </ul>
            </div>
            
          </footer>
        </div>
    

      </Container>
    </section>
  );
};

export default ContactSection;