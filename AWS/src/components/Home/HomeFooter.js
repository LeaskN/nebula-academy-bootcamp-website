import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './HomeFooter.css'

export const HomeFooter = () => (
  <Container className="fullHomeFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/program" variant="primary">Course Info</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Register Now</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)