import React from "react";
import CardTab from "../../components/CardTab";
import Navbar from "../../components/Navbar";
import Theme from "../../components/Theme";
import {
  Container,
  ContentContainer,
  HomeChocoLogo,
  Title,
  TitleContainer,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Theme>
      <Container>
        {/* NAVBAR */}
        <Navbar />

        {/* Page title */}
        <TitleContainer>
          <HomeChocoLogo />
          <Title>Buy me a Chocolate</Title>
        </TitleContainer>

        {/* CARD */}
        <ContentContainer>
          <CardTab />
        </ContentContainer>
      </Container>
    </Theme>
  );
};

export default Home;
