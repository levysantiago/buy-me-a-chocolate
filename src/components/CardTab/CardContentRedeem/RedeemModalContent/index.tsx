import { Attribute, Container, Topic } from "./styles";

interface IRedeemModalContentProps {
  totalToBurn: string;
  totalToReceive: string;
}

const RedeemModalContent = ({
  totalToBurn,
  totalToReceive,
}: IRedeemModalContentProps) => {
  return (
    <Container>
      <Topic>
        {`You will burn: `}
        <Attribute>{totalToBurn}</Attribute>
      </Topic>

      <Topic>
        {`You will receive: `}
        <Attribute>{totalToReceive}</Attribute>
      </Topic>
    </Container>
  );
};

export default RedeemModalContent;
