/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react'
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

const CardContentRedeem: React.FC = () => {
  const { chocBalance, buyMeAChocolateRepository, chocTokenRepository, walletAddress } = useContext(MetamaskContext)
  const [chocAmount, setChocAmount] = useState('')
  const [bnbAmount, setBnbAmount] = useState('')
  const [chocPriceInBNB, setChocPriceInBNB] = useState('')

  async function fetchData() {
    if (buyMeAChocolateRepository) {
      const _chocPriceInBNB = await buyMeAChocolateRepository.getPrice()
      setChocPriceInBNB(_chocPriceInBNB)
    }
  }

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

  async function onSubmit() {
    if (!validateValues()) {
      alert('Invalid values')
    }

    try {
      if (buyMeAChocolateRepository && chocTokenRepository) {

        const allowance = await chocTokenRepository.allowance({ from: walletAddress, to: buyMeAChocolateRepository.getAddress() })
        console.log(allowance);

        if (new BN(allowance).isLessThan(chocAmount)) {
          const maxIntAllowance = "115792089237316195423570985008687907853269984665640564039457.584007913129639935"
          const trx = await chocTokenRepository.approve({ address: buyMeAChocolateRepository.getAddress(), amount: maxIntAllowance })
          await trx.wait()
        }

        await buyMeAChocolateRepository.withdraw({
          chocAmount,
        })

        resetInputs()
        alert('Transação enviada com sucesso!')
      }
    } catch (e) {
      console.log(e)
      alert('Error while executing transaction')
    }
  }

  useEffect(() => {
    fetchData()
  }, [buyMeAChocolateRepository])

  return (
    <Container>
      <Title>Redeem reward</Title>

      <BalanceContainer>
        <LogoDarkIcon />
        <BalanceTitle>{chocBalance}</BalanceTitle>
      </BalanceContainer>

      <DetailedInput
        title="CHOC Amount"
        value={chocAmount}
        type={'text'}
        onChange={(e) => {
          if (chocPriceInBNB) {
            const typedChocAmount = e.target.value
            setChocAmount(typedChocAmount.toString())

            if (!isNaN(parseInt(typedChocAmount))) {
              const bnChocAmount = new BN(typedChocAmount)
              if (bnChocAmount.isGreaterThan(0)) {
                const newBnbAmount = new BN(bnChocAmount).multipliedBy(
                  chocPriceInBNB,
                )
                setBnbAmount(newBnbAmount.toString().replace(',', '.'))
              } else {
                setBnbAmount('0')
              }
            }
          }
        }}
        identifier="CHOC"
        helperText={`Available: ${isNaN(parseFloat(chocBalance)) ? chocBalance : fixNumber(chocBalance)}`}
      />

      <DetailedInput
        title="BNB Amount"
        value={bnbAmount}
        type={'text'}
        onChange={(e) => {
          if (chocPriceInBNB) {
            const typedBnbAmount = e.target.value
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
        }}
        identifier="BNB"
      />

      {/* <DetailedInput
        title="Wallet address"
        value={''}
        type={'text'}
        onChange={() => { }}
      /> */}

      <ButtonContainer>
        <ModalTrigger
          isModalTrigger={areInputsFilled()}
          title="Continuar"
          modal={{
            title: 'Redeem resume',
            content: RedeemModalContent({
              totalToBurn: `${chocAmount} CHOC`,
              totalToReceive: `${bnbAmount} BNB`,
            }),
          }}
          onClickConfirm={onSubmit}
          disabled={!walletAddress || !areInputsFilled()}
        />
      </ButtonContainer>
    </Container>
  )
}

export default CardContentRedeem
