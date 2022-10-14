import { CreditCard, Bank, Money } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CheckoutContext } from '../../../../contexts/CheckoutContext'
import { PaymentMethodSelectorContainer, PaymentTypeButton } from "./styles"

export type PaymentMethodTypes = "CreditCart" | "DebitCart" | "Money"

export function PaymentMethodSelector() {
  const { paymentMethod, setPaymentMethod } = useContext(CheckoutContext)

  function handleSelectPaymentMethod(method: PaymentMethodTypes) {
    setPaymentMethod(method)
  }

  return (
    <PaymentMethodSelectorContainer>
      <PaymentTypeButton
        value={paymentMethod === "CreditCart" ? "selected" : ""}
        onClick={() => handleSelectPaymentMethod("CreditCart")}
      >
        <CreditCard size={16} /> CARTÃO DE CRÉDITO
      </PaymentTypeButton>
      <PaymentTypeButton
        value={paymentMethod === "DebitCart" ? "selected" : ""}
        onClick={() => handleSelectPaymentMethod("DebitCart")}
      >
        <Bank size={16} /> CARTÃO DE DÉBITO
      </PaymentTypeButton>
      <PaymentTypeButton
        value={paymentMethod === "Money" ? "selected" : ""}
        onClick={() => handleSelectPaymentMethod("Money")}
      >
        <Money size={16} /> DINHEIRO
      </PaymentTypeButton>
    </PaymentMethodSelectorContainer>
  )
}