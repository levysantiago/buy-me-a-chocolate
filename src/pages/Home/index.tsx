import React from "react";
import Navbar from "../../components/Navbar";
import Theme from "../../components/Theme";
import { Container, HomeChocoLogo, Title, TitleContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <Theme>
      <Container>
        <Navbar />

        <TitleContainer>
          <HomeChocoLogo />
          <Title>Buy me a Chocolate</Title>
        </TitleContainer>
      </Container>
    </Theme>
  );
};

export default Home;
