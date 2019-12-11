import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './InternshipsFooter.css'

export const InternshipsFooter = () => (
  <Container className="fullInternshipsFooter">
    <Jumbotron>
      <h1 className="contentCentered">Become a Software Engineer With Nebula Academy</h1>
      <p className="contentCentered">
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Row>
          <Col className="contentCentered">
            <Button href="/outcomes" variant="primary">Outcomes</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
      </p>
    </Jumbotron>
  </Container>
)