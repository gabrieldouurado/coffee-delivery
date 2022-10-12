import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';
import { CartIndicatorContainer, CartItemsCount } from "./styles";

export function CartIndicator() {
  const { CartItems } = useContext(CartContext)
  return (
    <CartIndicatorContainer>
      {
        CartItems.length > 0 ? (
          <CartItemsCount>
            {CartItems.length}
          </CartItemsCount>
        ) : ""
      }
      <ShoppingCart size={22} />
    </CartIndicatorContainer>
  )
}