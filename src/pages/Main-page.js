import React, { Component } from "react";
import { Container,Row,Col } from 'react-bootstrap';
import '../css/styles.css'


class MainPage extends Component {

  render() {
    return (
      <Container className="text-center">
        <Row>
          <Col className="col-md-12">
          <img
            src = "../inicio.png" 
            className=" image-container"
            alt="Imagen EXPO Ing" 
          />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-12">
          <img
            src = "../fraseglobo.png" 
            className=" image-container"
            alt="Imagen EXPO Ing" 
          />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-12">
          <img
            src = "../imagentodos.png" 
            className="image-container"
            alt="Imagen EXPO Ing" 
          />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;