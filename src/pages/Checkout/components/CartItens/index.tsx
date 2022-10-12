import { Trash } from "phosphor-react"

import { CartItensContainer, RemoveItemButton, ButtonsDiv } from "./styles";

import Espresso from '../../../../assets/coffeeTypes/Expresso.png'
import { QuantitySelector } from "../../../../components/QuantitySelector";

export function CartItens() {
  return (
    <CartItensContainer>
      <img src={Espresso} alt="" />
      <div className="CoffeeInfo">
        Expresso Tradicional
        <ButtonsDiv>
          <QuantitySelector />
          <RemoveItemButton>
            <Trash />
            Remover
          </RemoveItemButton>
        </ButtonsDiv>
      </div>
      <div>
        <span>R$ 9,90</span>
      </div>
    </CartItensContainer>
  )
}