import { OrderContent, OrderInfos, SuccessContainer, SuccessTitleAndSubtittle } from "./styles";

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import MotoboyFigure from "../../assets/motoboy.png"
import { CircleIcon } from "../../components/CircleIcon";
import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

const PAYMENT_TYPES = {
  CreditCart: "Cartão de Crédito",
  DebitCart: "Cartão de Débito",
  Money: "Dinheiro"
}

export function Success() {
  const { paymentMethod, addressInfos } = useContext(CheckoutContext)

  return (
    <SuccessContainer>
      <SuccessTitleAndSubtittle>
        <span>Uhu! Pedido confirmado</span>
        Agora é só aguardar que logo o café chegará até você
      </SuccessTitleAndSubtittle>
      <OrderContent>
        <OrderInfos>
          <div>
            <CircleIcon icon={<MapPin />} backgroundColor="purple" />
            <section>
              <span>Entrega em <strong>Rua {addressInfos?.street}, {addressInfos?.houseNumber}</strong></span>
              {addressInfos?.district} - {addressInfos?.city}, {addressInfos?.state}
            </section>
          </div>

          <div>
            <CircleIcon icon={<Timer />} backgroundColor="yellow" />
            <section>
              <span>Previsão de entrega</span>
              <strong>20 - 30 minutos</strong>
            </section>
          </div>

          <div>
            <CircleIcon icon={<CurrencyDollar />} backgroundColor="yellowDark" />
            <section>
              <span>Pagamento na entrega</span>
              <strong>{PAYMENT_TYPES[paymentMethod]}</strong>
            </section>
          </div>
        </OrderInfos>
        <img src={MotoboyFigure} alt="Figura de um motoboy" />
      </OrderContent>
    </SuccessContainer>
  )
}