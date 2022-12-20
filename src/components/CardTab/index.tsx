import React, { useState } from "react";
import {
  Container,
  TabsContainer,
  TabSelector,
  TabTitle,
  TabTitleContainer,
} from "./styles";

const CardTab: React.FC = () => {
  const [tabSelected, setTabSelected] = useState(1);

  return (
    <Container>
      <TabsContainer>
        {/* TAB 1 */}
        <TabTitleContainer
          onClick={() => {
            setTabSelected(1);
          }}
        >
          <TabTitle>Buy</TabTitle>
          {tabSelected === 1 ? <TabSelector /> : null}
        </TabTitleContainer>

        {/* TAB 2 */}
        <TabTitleContainer
          onClick={() => {
            setTabSelected(2);
          }}
        >
          <TabTitle>Redeem</TabTitle>
          {tabSelected === 2 ? <TabSelector /> : null}
        </TabTitleContainer>
      </TabsContainer>
    </Container>
  );
};

export default CardTab;
