import { createContext, ReactNode, useState } from "react";
import { newCheckoutPurchaseFormData } from "../pages/Checkout";
import { PaymentMethodTypes } from "../pages/Checkout/components/PaymentMethodSelector";


interface CheckoutContextProviderProps {
  children: ReactNode
}

interface CheckoutContextType {
  paymentMethod: PaymentMethodTypes
  addressInfos: newCheckoutPurchaseFormData | undefined
  setPaymentMethod: React.Dispatch<React.SetStateAction<PaymentMethodTypes>>
  setAddressInfos: React.Dispatch<React.SetStateAction<newCheckoutPurchaseFormData | undefined>>
}

export const CheckoutContext = createContext({} as CheckoutContextType)

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodTypes>('CreditCart')
  const [addressInfos, setAddressInfos] = useState<newCheckoutPurchaseFormData>()

  return (
    <CheckoutContext.Provider
      value={{
        paymentMethod,
        addressInfos,
        setPaymentMethod,
        setAddressInfos
      }}>
      {children}
    </CheckoutContext.Provider>
  )
}