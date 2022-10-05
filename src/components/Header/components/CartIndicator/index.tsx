import { ShoppingCart } from 'phosphor-react'
import { CartIndicatorContainer } from "./styles";

export function CartIndicator() {
  return (
    <CartIndicatorContainer>
      <ShoppingCart size={18}/>
    </CartIndicatorContainer>
  )
}