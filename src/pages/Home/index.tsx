import React from "react";
import { Button, Col, Container, Row, ThemeProvider } from "react-bootstrap";
import MyCard from "../../components/Card";
import MyInputGroup from "../../components/InputGroup";

const Home: React.FC = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Container>
        <div style={{ height: "200px" }}></div>
        <MyCard
          body={
            <Col lg={{ span: "6", offset: "3" }}>
              <h3>Buy someone a Chocolate</h3>

              <MyInputGroup
                title="Amount to pay"
                placeholder="BNB amount"
                ariaLabel="BNB amount"
                addonValue="BNB"
              />
              <MyInputGroup
                title="Amount to send"
                placeholder="CHOC amount"
                ariaLabel="CHOC amount"
                addonValue="CHOC"
              />
              <MyInputGroup
                title="To address"
                placeholder="0x123..."
                ariaLabel="Address to send the Chocs"
              />

              <Col style={{ float: "right" }}>
                <Button as="input" type="button" value="Send" />
              </Col>
            </Col>
          }
        ></MyCard>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
