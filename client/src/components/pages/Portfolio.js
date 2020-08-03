import React from "react";
import { Jumbotron, Container, Card, Button, Row, Col } from "react-bootstrap";

import "./pages.css";

const Portfolio = () => (
  <div>
    <Jumbotron>
      <h3 className="intro">Portfolio</h3>
      <Container>
        {/* Row of cards 1  */}
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="./" />
              <Card.Body>
                <Card.Title>Recipe etc...</Card.Title>
                <Card.Text>
                  This is a recipe search app that we created as our first project
                </Card.Text>
                <a
                  href="https://github.com/delingerr/popcube5"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                  This is a simple app that will provide you with the Weather of the city that you search for.
                </Card.Text>
                <a
                  href="https://github.com/delingerr/ccsset"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                  App that allows you to take notes and save them into a database.
                </Card.Text>
                <a
                  href="https://github.com/delingerr/reguleJS"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </div>
);

export default Portfolio;
