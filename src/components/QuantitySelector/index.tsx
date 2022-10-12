import { Plus, Minus } from 'phosphor-react'

import { AddOrRemoveQuantity, QuantitySelectorContainer } from "./styles";

interface QuantitySelectorProps {
  quantity: number
  onClickIncrease: () => void
  onClickDecrease: () => void
}

export function QuantitySelector({ quantity, onClickIncrease, onClickDecrease }: QuantitySelectorProps) {
  return (
    <QuantitySelectorContainer>
      <AddOrRemoveQuantity onClick={onClickDecrease}>
        <Minus />
      </AddOrRemoveQuantity>
      <span id='quantity'>{quantity}</span>
      <AddOrRemoveQuantity onClick={onClickIncrease}>
        <Plus />
      </AddOrRemoveQuantity>
    </QuantitySelectorContainer>
  )
}