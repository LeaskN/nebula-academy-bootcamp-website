import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './GuestSpeakersFooter.css'

export const GuestSpeakersFooter = () => (
  <Container className="fullGuestSpeakersFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
      
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/Outcomes" variant="warning">Outcomes</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/registration" variant="warning">Register</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)