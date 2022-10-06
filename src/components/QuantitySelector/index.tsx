import { Plus, Minus} from 'phosphor-react'

import { AddOrRemoveQuantity, QuantitySelectorContainer } from "./styles";

export function QuantitySelector() {
  return (
    <QuantitySelectorContainer>
      <AddOrRemoveQuantity>
        <Minus />
      </AddOrRemoveQuantity>
      <span id='quantity'>1</span>
      <AddOrRemoveQuantity>
        <Plus />
      </AddOrRemoveQuantity>
    </QuantitySelectorContainer>
  )
}