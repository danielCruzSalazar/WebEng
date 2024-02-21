import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GMapSection = () => {
  return (
    <section>
      <Container className="mt-5 pt-5">
        <Row>
          <Col className="text-center">
            <img src="../img-6.JPG" className="rounded img-fluid" alt="..." />
          </Col>
        </Row>
        <Row id="lugar" className="mt-5 pt-5">
          <Col className="text-center">
            <hr className="hr hr-blurry" />
            <div className="info-evento-pasado mt-5 mb-5 pb-5 pt-5">
              <p>
                Únete al evento donde mentes brillantes de la Escuela de Ingeniería presentan sus proyectos, mostrando las innovaciones que cambiarán el mundo.
                ¡No te pierdas la oportunidad de presenciar el poder de la creatividad y la tecnología en acción!
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <p className="info-titulo text-center">Lugar</p>
            <div className="info-lugar">
              <p>Av. CETYS Universidad No. 4. Fracc. El Lago, Tijuana, Baja California, México, C.P. 22210</p>
              <p className="fw-medium">Entrada a público en general.</p>
              <p className="fw-medium">Evento sin costo.</p>
            </div>
          </Col>
          <Col sm={8}>
            <div className="google-map" style={{ height: '30vh', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.3660882274055!2d-116.92516210008283!3d32.506586725082734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d938906d99584d%3A0xd74f891822a559c0!2sGimnasio%20-%20Auditorio%20Rodrigo%20Valle%20Hernandez!5e0!3m2!1sen!2smx!4v1684399118703!5m2!1sen!2smx"
                height="100%"
                width="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GMapSection;

