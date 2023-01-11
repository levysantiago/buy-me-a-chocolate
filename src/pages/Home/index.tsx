import React from "react";
import CardTab from "../../components/CardTab";
import Navbar from "../../components/Navbar";
import Theme from "../../components/Theme";
import VersionBadge from "../../components/VersionBadge";
import {
  Container,
  ContentContainer,
  HomeChocoLogo,
  Title,
  TitleContainer,
  VersionBadgeContainer,
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

        <VersionBadgeContainer>
          <VersionBadge />
        </VersionBadgeContainer>
      </Container>
    </Theme>
  );
};

export default Home;
