import { Attribute, Container, Topic } from './styles'

interface IBuyModalContentProps {
  totalToSpend: string
  totalToSend: string
  fee: string
}

const BuyModalContent = ({
  totalToSpend,
  totalToSend,
  fee,
}: IBuyModalContentProps) => {
  return (
    <Container>
      <Topic>
        {`Total to spend: `}
        <Attribute>{totalToSpend}</Attribute>
      </Topic>

      <Topic>
        {`We will send: `}
        <Attribute>{totalToSend}</Attribute>
      </Topic>

      <Topic>
        {`Service fee: `}
        <Attribute>{fee}</Attribute>
      </Topic>
    </Container>
  )
}

export default BuyModalContent
