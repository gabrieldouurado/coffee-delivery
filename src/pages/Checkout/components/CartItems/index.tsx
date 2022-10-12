import { Trash } from "phosphor-react"

import { CartItemsContainer, RemoveItemButton, ButtonsDiv } from "./styles";

import Espresso from '../../../../assets/CoffeeTypeImage/Expresso.png'
import { QuantitySelector } from "../../../../components/QuantitySelector";

export function CartItems() {
  return (
    <CartItemsContainer>
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
    </CartItemsContainer>
  )
}