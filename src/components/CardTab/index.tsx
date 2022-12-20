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
          <TabSelector isVisible={tabSelected === 1} />
        </TabTitleContainer>

        {/* TAB 2 */}
        <TabTitleContainer
          onClick={() => {
            setTabSelected(2);
          }}
        >
          <TabTitle>Redeem</TabTitle>
          <TabSelector isVisible={tabSelected === 2} />
        </TabTitleContainer>
      </TabsContainer>
    </Container>
  );
};

export default CardTab;
