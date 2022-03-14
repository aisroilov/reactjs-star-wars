import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Person = () => {
  const imgUrl = "images/people/1.jpg";
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <img src={imgUrl} alt="star wars" width="500" height="600" />
          </Col>
          <Col sm={8}>Hello</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Person;
