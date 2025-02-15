import React from 'react';
import { Jumbotron, Container, Button, Col, Row} from 'react-bootstrap';
import './InternshipsFooter.css'

export const InternshipsFooter = () => (
  <Container className="fullInternshipsFooter">
    <Jumbotron>
      <h1 className="contentCentered">Become a Software Engineer With Nebula Academy</h1><br/>
              <Row>
          <Col className="contentCentered">
            <Button href="/outcomes" variant="primary">Outcomes</Button>
          </Col>
          <Col className="contentCentered">
            <Button href="/application" variant="primary">Apply</Button>
          </Col>
        </Row>
    </Jumbotron>
  </Container>
)