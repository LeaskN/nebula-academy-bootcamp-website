import React from 'react';
import { Jumbotron, Container, Button, Col, Row } from 'react-bootstrap';
import './OldOutcomesFooter.css'

export const OldOutcomesFooter = () => (
  <Container className="fullOldOutcomesFooter">
    <Jumbotron>
      <h1 className="contentCentered">Build your capacity for AWS Cloud with Nebula Academy</h1><br/>
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/registration" variant="warning">Register</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)