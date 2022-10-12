import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { CartItems } from './components/CartItems';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { PurchaseValues } from './components/PurchaseValues';
import { AddressAndPayment, AddressForm, StreetInput, ZipCodeInput, CheckoutContainer, Payment, Title, HouseNumberInput, ComplementInput, DistrictInput, CityInput, StateInput, Cart, PurchaseButton } from "./styles";

export function Checkout() {
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
            <PaymentMethodSelector/>
          </Payment>
        </AddressAndPayment>
      </div>
      <div>
        <Title>Cafés selecionados</Title>
        <Cart>
          <CartItems />
          <CartItems />
          <PurchaseValues />
          <PurchaseButton>
            CONFIRMAR PEDIDO
          </PurchaseButton>
        </Cart>
      </div>
    </CheckoutContainer>
  )
}