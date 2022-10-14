import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from './components/CartItem';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { PurchaseValues } from './components/PurchaseValues';
import { AddressAndPayment, AddressForm, CheckoutContainer, Payment, Title, Cart, PurchaseButton } from "./styles";

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';
import { NewCheckoutPurchase } from './components/NewCheckoutPurchase';
import { CheckoutContext } from '../../contexts/CheckoutContext';
import { useNavigate } from 'react-router-dom';

const newCheckoutPurchaseFormSchema = zod.object({
  zipCode: zod.string(),
  street: zod.string(),
  houseNumber: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string()
})

export type newCheckoutPurchaseFormData = zod.infer<typeof newCheckoutPurchaseFormSchema>

export function Checkout() {
  const { CartItems } = useContext(CartContext)
  const { setAddressInfos } = useContext(CheckoutContext)

  const navigate = useNavigate()

  const newCheckoutPurchaseForm = useForm<newCheckoutPurchaseFormData>({
    resolver: zodResolver(newCheckoutPurchaseFormSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      houseNumber: '',
      complement: '',
      district: '',
      city: '',
      state: ''
    }
  })

  const { handleSubmit, reset } = newCheckoutPurchaseForm

  const totalPriceOfItems = CartItems.reduce((sum, item) => {
    const subtotalPriceOfOneItem: number = item.price * item.quantity
    return sum += subtotalPriceOfOneItem
  }, 0)

  function handleCreateNewPurchase(data: newCheckoutPurchaseFormData) {
    setAddressInfos(data)
    reset()
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressAndPayment>
          <AddressForm id='address-form' onSubmit={handleSubmit(handleCreateNewPurchase)}>
            <FormProvider {...newCheckoutPurchaseForm}>
              <div>
                <MapPinLine size={22} />
                <div>
                  Endereço de entrega
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </div>
              <NewCheckoutPurchase />
            </FormProvider>
          </AddressForm>
          <Payment>
            <div>
              <CurrencyDollar size={22} />
              <div>
                Pagamento
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </div>
            <PaymentMethodSelector />
          </Payment>
        </AddressAndPayment>
      </div>
      <div>
        <Title>Cafés selecionados</Title>
        <Cart>
          {CartItems.length > 0 ? (
            CartItems.map(item => {
              return <CartItem
                key={item.name}
                type={item.type}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            })
          ) : <div className='emptyCart'>Sem itens no carrinho</div>}
          <PurchaseValues
            totalPriceOfItems={totalPriceOfItems}
            deliveryPrice={10.50}
          />
          <PurchaseButton
            type='submit'
            form='address-form'
          >
            CONFIRMAR PEDIDO
          </PurchaseButton>
        </Cart>
      </div>
    </CheckoutContainer>
  )
}