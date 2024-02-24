
import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CenteredImage from './EXPOImage.js';
import DesCarousel from "./DesCarousel.js";
import GMapSection from '../pages/MapSection.js'

class EXPOIng extends Component {
  render() {
    return (
      <div>
        <CenteredImage />
        <Container fluid>
          <Row className="align-items-center" style={{ height: '30vh' }}>
            <Col className="col-info-presentacion">
              <div className="info-presentacion text-center">
                <p>
                  "Únete a nosotros para descubrir las demostraciones de proyectos
                  de estudiantes de Ingeniería"
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <DesCarousel/>
        <GMapSection />
      </div>
    );
  }
}

export default EXPOIng;


