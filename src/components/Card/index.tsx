import React, { ReactNode } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface ICardProps {
  body: ReactNode;
}

const MyCard: React.FC<ICardProps> = (props) => {
  return (
    <Row className="justify-content-md-center">
      <Col xs lg="8">
        <Card style={{ borderRadius: "20px" }}>
          <Card.Body>{props.body}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MyCard;
