/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react'
import DetailedInput from '../../Inputs/DetailedInput'
import { ButtonContainer } from '../CardContentBuy/styles'
import {
  BalanceContainer,
  BalanceTitle,
  Container,
  LogoDarkIcon,
  Title,
} from './styles'
import ModalTrigger from '../../ModalTrigger'
import RedeemModalContent from './RedeemModalContent'
import { MetamaskContext } from '../../context/MetamaskContext'
import { BigNumber as BN } from 'bignumber.js'
import fixNumber from '../../../helpers/fixNumber'
import { notification } from '../../notifications/notification'
import { isStringFloatNumber } from '../../../helpers/isStringFloatNumber'

const CardContentRedeem: React.FC = () => {
  const {
    chocBalance,
    buyMeAChocolateRepository,
    chocTokenRepository,
    walletAddress,
    reloadBalances,
    chocPriceInBNB } = useContext(MetamaskContext)
  const [chocAmount, setChocAmount] = useState('')
  const [bnbAmount, setBnbAmount] = useState('')
  const [loading, setLoading] = useState(false)

  function validateValues() {
    if (isNaN(parseFloat(chocAmount))) return false

    const chocAmountBN = new BN(chocAmount)
    if (chocAmountBN.isGreaterThan(0)) {
      return true
    }

    return false
  }

  function areInputsFilled() {
    return bnbAmount !== '' && chocAmount !== ''
  }

  function resetInputs() {
    setBnbAmount('')
    setChocAmount('')
  }

  function parseCoinAmount(coinAmount: string) {
    return isNaN(parseFloat(coinAmount)) ? coinAmount : fixNumber(coinAmount)
  }

  function onChangeChocAmount(typedChocAmount: string) {
    if (!isStringFloatNumber(typedChocAmount)) {
      setChocAmount(chocAmount)
      return
    }
    if (chocPriceInBNB) {
      setChocAmount(typedChocAmount.toString())

      if (!isNaN(parseInt(typedChocAmount))) {
        const bnChocAmount = new BN(typedChocAmount)
        if (bnChocAmount.isGreaterThan(0)) {
          const newBnbAmount = new BN(bnChocAmount).multipliedBy(chocPriceInBNB)
          setBnbAmount(newBnbAmount.toString().replace(',', '.'))
        } else {
          setBnbAmount('0')
        }
      }
    }
  }

  function onChangeBnbAmount(typedBnbAmount: string) {
    if (!isStringFloatNumber(typedBnbAmount)) {
      setBnbAmount(bnbAmount)
      return
    }
    if (chocPriceInBNB) {
      setBnbAmount(typedBnbAmount.toString())

      if (!isNaN(parseInt(typedBnbAmount))) {
        const bnBnbAmount = new BN(typedBnbAmount)
        if (bnBnbAmount.isGreaterThan(0)) {
          const newChocAmount = new BN(bnBnbAmount).div(chocPriceInBNB)
          setChocAmount(newChocAmount.toString().replace(',', '.'))
        } else {
          setChocAmount('0')
        }
      }
    }
  }

  async function onSubmit() {
    if (!validateValues()) {
      notification.open({
        title: "Invalid typed values",
        type: "warning",
        message: "Something is wrong. Please, revise the data you provided.",
        duration: 5000
      })
      return
    }

    if (new BN(chocAmount).isGreaterThan(chocBalance)) {
      notification.open({
        title: "Insuficient CHOC balance",
        type: "warning",
        message: `You have ${fixNumber(chocBalance)} CHOC. Please, insert a valid CHOC amount to redeem.`,
        duration: 5000
      })
      return
    }

    try {
      if (buyMeAChocolateRepository && chocTokenRepository) {

        setLoading(true)
        const allowance = await chocTokenRepository.allowance({ from: walletAddress, to: buyMeAChocolateRepository.getAddress() })

        if (new BN(allowance).isLessThan(chocAmount)) {
          const maxIntAllowance = "115792089237316195423570985008687907853269984665640564039457.584007913129639935"
          const trx = await chocTokenRepository.approve({ address: buyMeAChocolateRepository.getAddress(), amount: maxIntAllowance })
          await trx.wait()
        }

        const trx = await buyMeAChocolateRepository.withdraw({
          chocAmount,
        })
        resetInputs()

        const notificationSubmittedId = notification.open({
          title: "Transaction submitted...",
          type: "info",
          message: "We are waiting for the transaction to be executed."
        })

        await trx.wait()

        notification.remove(notificationSubmittedId)
        notification.open({
          title: "Transaction executed",
          type: "success",
          message: "Your transaction was executed successfully!",
          duration: 5000
        })
        reloadBalances()
      }
    } catch (e) {
      console.log(e)
      notification.open({
        title: "Transaction rejected",
        type: "danger",
        message: "Your transaction was rejected. If wasn't you, check if you typed all data correctly.",
        duration: 10000
      })
    } finally {
      setLoading(false)

    }
  }

  return (
    <Container>
      <Title>Redeem reward</Title>

      <BalanceContainer>
        <LogoDarkIcon />
        <BalanceTitle>{chocBalance}</BalanceTitle>
      </BalanceContainer>

      <DetailedInput
        title="You will burn"
        value={chocAmount}
        type={'text'}
        onChange={(e) => {
          onChangeChocAmount(e.target.value)
        }}
        identifier="CHOC"
        helperText={`Available: ${parseCoinAmount(chocBalance)}`}
      />

      <DetailedInput
        title="You will redeem"
        value={bnbAmount}
        type={'text'}
        onChange={(e) => {
          onChangeBnbAmount(e.target.value)
        }}
        identifier="BNB"
      />

      <ButtonContainer>
        <ModalTrigger
          isModalTrigger={areInputsFilled()}
          title="Continuar"
          modal={{
            title: 'Redeem resume',
            content: RedeemModalContent({
              totalToBurn: chocAmount,
              totalToReceive: bnbAmount,
            }),
          }}
          onClickConfirm={onSubmit}
          disabled={!walletAddress || !areInputsFilled()}
          loading={loading}
        />
      </ButtonContainer>
    </Container>
  )
}

export default CardContentRedeem
