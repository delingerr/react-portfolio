import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

const Home = () => (
  <div>
    <Row>
      <Col className="text-center">
        <Jumbotron>
          <Container className="justify-content-md-center">
            <Row>
              <Col>
                <h1 class="text-center">Delinger Rodriguez</h1>
                <img
                  src="https://www.w3schools.com/w3css/img_avatar3.png"
                  alt="image " height="250" width="250"></img>
                <h5>
                  My journey in the field started at 10 years old. Over the years, I would spend
                  my days fixing desktop/laptops, this will include software and hardware.
                </h5>

                <h5>
                  First time I ever coded was in was at one of job trying to use
                  a SQL query to search for transactions. I joined the 
                  Rutgers Coding Bootcamp where I gained many new
                  skills in web developement. This skills include HTML, CSS ,
                  JavaScript, M.E.R.N.,Git and many more skills which made me a
                  full stack developer.
                </h5>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Col>
    </Row>
  </div>
);

export default Home;
