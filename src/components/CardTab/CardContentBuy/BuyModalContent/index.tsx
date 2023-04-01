import fixNumber from '../../../../helpers/fixNumber'
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
        <Attribute>{fixNumber(totalToSpend)} BNB</Attribute>
      </Topic>

      <Topic>
        {`We will send: `}
        <Attribute>{fixNumber(totalToSend)} CHOC</Attribute>
      </Topic>

      <Topic>
        {`Service fee: `}
        <Attribute>{fee}% (Applied to CHOC)</Attribute>
      </Topic>
    </Container>
  )
}

export default BuyModalContent
