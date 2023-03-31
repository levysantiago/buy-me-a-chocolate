/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react'
import DetailedInput from '../../Inputs/DetailedInput'
import RoundChocoButton from '../../buttons/RoundChocoButton'
import {
  ButtonContainer,
  Container,
  RoundButtonsContainer,
  Title,
} from './styles'
import ModalTrigger from '../../ModalTrigger'
import BuyModalContent from './BuyModalContent'
import { MetamaskContext } from '../../context/MetamaskContext'
import { BigNumber as BN } from 'bignumber.js'
import { ethers } from 'ethers'
import fixNumber from '../../../helpers/fixNumber'
import 'react-notifications-component/dist/theme.css'
import { notification } from '../../notifications/notification'
import { isStringFloatNumber } from '../../../helpers/isStringFloatNumber'

const CardContentBuy: React.FC = () => {
  const [buttonSelected, setButtonSelected] = useState<number>(3)
  const [chocAmount, setChocAmount] = useState('')
  const [bnbAmount, setBnbAmount] = useState('')
  const [feePercent, setFeePercent] = useState('')
  const [chocPriceInBNB, setChocPriceInBNB] = useState('')
  const [walletTo, setWalletTo] = useState('')
  const [loading, setLoading] = useState(false)
  const { cryptoBalance, buyMeAChocolateRepository, walletAddress, reloadBalances } =
    useContext(MetamaskContext)

  async function fetchData() {
    if (buyMeAChocolateRepository) {
      const _feePercent = await buyMeAChocolateRepository.getFeePercent()
      setFeePercent(_feePercent)

      const _chocPriceInBNB = await buyMeAChocolateRepository.getPrice()
      setChocPriceInBNB(_chocPriceInBNB)
    }
  }

  function validateValues() {
    if (isNaN(parseFloat(chocAmount))) return false

    const chocAmountBN = new BN(chocAmount)
    if (chocAmountBN.isGreaterThan(0) && ethers.utils.isAddress(walletTo)) {
      return true
    }

    return false
  }

  function areInputsFilled() {
    return bnbAmount !== '' && chocAmount !== '' && walletTo !== ''
  }

  function resetInputs() {
    setBnbAmount('')
    setChocAmount('')
    setWalletTo('')
  }

  async function onSubmit() {
    if (!validateValues()) {
      alert('Invalid values')
    }

    try {
      if (buyMeAChocolateRepository) {
        setLoading(true)

        const trxResponse = await buyMeAChocolateRepository.buyToWithBNB({
          cryptoAmount: bnbAmount,
          toAddress: walletTo,
        })

        resetInputs()

        const notificationSubmittedId = notification.open({
          title: "Transaction submitted...",
          type: "info",
          message: "We are waiting for the transaction to be executed."
        })

        await trxResponse.wait()

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

  useEffect(() => {
    fetchData()
  }, [buyMeAChocolateRepository])

  return (
    <Container>
      <Title>Buy someone a chocolate</Title>
      <RoundButtonsContainer>
        <RoundChocoButton
          text="1x"
          isSelected={buttonSelected === 0}
          onClick={() => {
            setButtonSelected(0)
            // setChocAmount('1')
            onChangeChocAmount('1')
          }}
        />
        <RoundChocoButton
          text="3x"
          isSelected={buttonSelected === 1}
          onClick={() => {
            setButtonSelected(1)
            // setChocAmount('3')
            onChangeChocAmount('3')
          }}
        />
        <RoundChocoButton
          text="5x"
          isSelected={buttonSelected === 2}
          onClick={() => {
            setButtonSelected(2)
            // setChocAmount('5')
            onChangeChocAmount('5')
          }}
        />
        <RoundChocoButton
          text="#"
          isSelected={buttonSelected === 3}
          onClick={() => setButtonSelected(3)}
        />
      </RoundButtonsContainer>

      <DetailedInput
        title="BNB Amount"
        value={bnbAmount}
        type={'text'}
        disabled={!walletAddress}
        onChange={(e) => {
          onChangeBnbAmount(e.target.value)
        }}
        identifier="BNB"
        helperText={`Available: ${parseCoinAmount(cryptoBalance)}`}
      />

      <DetailedInput
        title="CHOC Amount"
        value={chocAmount}
        type={'text'}
        onChange={(e) => {
          onChangeChocAmount(e.target.value)
        }}
        disabled={buttonSelected !== 3 || !walletAddress}
        identifier="CHOC"
      />

      <DetailedInput
        title="Wallet address"
        value={walletTo}
        type={'text'}
        disabled={!walletAddress}
        onChange={(e) => {
          setWalletTo(e.target.value)
        }}
      />

      <ButtonContainer>
        <ModalTrigger
          isModalTrigger={areInputsFilled()}
          title="Continuar"
          modal={{
            title: 'Purchase resume',
            content: BuyModalContent({
              totalToSpend: bnbAmount,
              totalToSend: chocAmount,
              fee: feePercent,
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

export default CardContentBuy
