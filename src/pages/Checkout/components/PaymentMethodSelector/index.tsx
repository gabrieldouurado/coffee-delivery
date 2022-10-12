import { CreditCard, Bank, Money } from 'phosphor-react'
import { useState } from 'react'
import { PaymentMethodSelectorContainer, PaymentTypeButton } from "./styles"

export function PaymentMethodSelector() {
  const [paymentMethod, setPaymentMethod] = useState("CreditCart")

  function handleSelectPaymentMethod(method: "CreditCart" | "DebitCart" | "Money") {
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