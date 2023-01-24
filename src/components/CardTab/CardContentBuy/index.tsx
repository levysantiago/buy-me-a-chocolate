import React, { useContext, useEffect, useState } from "react";
import DetailedInput from "../../Inputs/DetailedInput";
import RoundChocoButton from "../../buttons/RoundChocoButton";
import { ButtonContainer, Container, RoundButtonsContainer } from "./styles";
import { Title } from "./styles";
import ModalTrigger from "../../ModalTrigger";
import BuyModalContent from "./BuyModalContent";
import { BigNumber, ethers } from "ethers";
import { MetamaskContext } from "../../context/MetamaskContext";

const CardContentBuy: React.FC = () => {
  const [buttonSelected, setButtonSelected] = useState<number>(3);
  const [chocAmount, setChocAmount] = useState("");
  const { isConnected, provider, walletAddress, chocTokenRepository } =
    useContext(MetamaskContext);

  useEffect(() => {
    if (isConnected && walletAddress && chocTokenRepository) {
      chocTokenRepository
        .balanceOf(walletAddress)
        .then((balance: BigNumber) => {
          console.log(ethers.BigNumber.from(balance).toString());
        });
    }
  }, [provider, isConnected, chocTokenRepository]);

  return (
    <Container>
      <Title>Buy someone a chocolate</Title>
      <RoundButtonsContainer>
        <RoundChocoButton
          text="1x"
          isSelected={buttonSelected === 0}
          onClick={() => {
            setButtonSelected(0);
            setChocAmount("1");
          }}
        />
        <RoundChocoButton
          text="3x"
          isSelected={buttonSelected === 1}
          onClick={() => {
            setButtonSelected(1);
            setChocAmount("3");
          }}
        />
        <RoundChocoButton
          text="5x"
          isSelected={buttonSelected === 2}
          onClick={() => {
            setButtonSelected(2);
            setChocAmount("5");
          }}
        />
        <RoundChocoButton
          text=">5x"
          isSelected={buttonSelected === 3}
          onClick={() => setButtonSelected(3)}
        />
      </RoundButtonsContainer>

      <DetailedInput
        title="BUSD Amount"
        value={""}
        type={"number"}
        setValue={() => {}}
        identifier="BUSD"
        helperText="Available: 123"
      />

      <DetailedInput
        title="CHOC Amount"
        value={chocAmount}
        type={"number"}
        setValue={setChocAmount}
        disabled={buttonSelected !== 3}
        identifier="CHOC"
      />

      <DetailedInput
        title="Wallet address"
        value={""}
        type={"text"}
        setValue={() => {}}
      />

      <ButtonContainer>
        <ModalTrigger
          title="Continuar"
          modal={{
            title: "Purchase resume",
            content: BuyModalContent({
              totalToSpend: "asd",
              totalToSend: "asd",
              fee: "asd",
            }),
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

export default CardContentBuy;
