import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './ScholarshipsFooter.css'

export const ScholarshipsFooter = () => (
  <Container className="fullScholarshipsFooter">
    <Jumbotron>
      <h1 className="contentCentered">Become a Software Engineer With Nebula Academy</h1><br/>
        <Row>
          <Col className="contentCentered">
            <Button href="/curriculum" variant="primary">Curriculum</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/internships" variant="primary">Apply</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)