import { OrderContent, OrderInfos, SuccessContainer, SuccessTitleAndSubtittle } from "./styles";

import { MapPin, Timer, CurrencyDollar} from 'phosphor-react'

import MotoboyFigure from "../../assets/motoboy.png"
import { CircleIcon } from "../../components/CircleIcon";

export function Success() {
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
            <text>
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
              Farrapos - Porto Alegre, RS
            </text>
          </div>

          <div>
            <CircleIcon icon={<Timer />} backgroundColor="yellow" />
            <text>
              <span>Previsão de entrega</span>
              <strong>20 - 30 minutos</strong>
            </text>
          </div>

          <div>
            <CircleIcon icon={<CurrencyDollar />} backgroundColor="yellowDark" />
            <text>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </text>
          </div>
        </OrderInfos>
        <img src={MotoboyFigure} alt="Figura de um motoboy" />
      </OrderContent>
    </SuccessContainer>
  )
}