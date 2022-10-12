import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartItem } from './components/CartItem';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { PurchaseValues } from './components/PurchaseValues';
import { AddressAndPayment, AddressForm, StreetInput, ZipCodeInput, CheckoutContainer, Payment, Title, HouseNumberInput, ComplementInput, DistrictInput, CityInput, StateInput, Cart, PurchaseButton } from "./styles";

export function Checkout() {
  const { CartItems } = useContext(CartContext)


  const totalPriceOfItems = CartItems.reduce((sum, item) => {
    const subtotalPriceOfOneItem: number = item.price * item.quantity
    return sum += subtotalPriceOfOneItem
  }, 0)

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressAndPayment>
          <AddressForm>
            <div>
              <MapPinLine size={22} />
              <div>
                Endereço de entrega
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <section>
              <ZipCodeInput placeholder='CEP' />
              <StreetInput placeholder='Rua' />
              <div>
                <HouseNumberInput placeholder='Número' />
                <ComplementInput placeholder="Complemento" />
              </div>
              <div>
                <DistrictInput placeholder="Bairro" />
                <CityInput placeholder="Cidade" />
                <StateInput placeholder='UF' />
              </div>
            </section>
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
          <PurchaseButton>
            CONFIRMAR PEDIDO
          </PurchaseButton>
        </Cart>
      </div>
    </CheckoutContainer>
  )
}