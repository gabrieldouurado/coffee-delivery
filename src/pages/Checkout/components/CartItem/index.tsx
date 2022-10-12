import { Trash } from "phosphor-react"

import { CartItemsContainer, RemoveItemButton, ButtonsDiv } from "./styles";

import { QuantitySelector } from "../../../../components/QuantitySelector";
import { CartContext, CartItemsType } from "../../../../contexts/CartContext";
import { CoffeeTypeImage } from "../../../../assets/CoffeeTypeImage";
import { useContext } from "react";

export function CartItem({ type, name, quantity, price }: CartItemsType) {
  const { changeItemQuantity, removeItemOfCart } = useContext(CartContext)
  const ImageCoffee = CoffeeTypeImage(type)

  function handleIncreaseItemQuantityInCart() {
    const newQuantity = quantity + 1
    changeItemQuantity(name, newQuantity)
  }

  function handleDecreaseItemQuantityInCart() {
    const newQuantity = quantity - 1
    changeItemQuantity(name, newQuantity)
  }

  function handleRemoveItemOfCart() {
    removeItemOfCart(name)
  }

  const totalPriceItem = (price * quantity).toFixed(2).replace('.', ',')

  return (
    <CartItemsContainer>
      <img src={ImageCoffee} alt="" />
      <div className="CompleteCoffeeInfos">
        <div className="CoffeeInfo">
          {name}
          <ButtonsDiv>
            <QuantitySelector
              quantity={quantity}
              onClickIncrease={handleIncreaseItemQuantityInCart}
              onClickDecrease={handleDecreaseItemQuantityInCart}
            />
            <RemoveItemButton onClick={handleRemoveItemOfCart}>
              <Trash />
              Remover
            </RemoveItemButton>
          </ButtonsDiv>
        </div>
        <div>
          <span>R$ {totalPriceItem}</span>
        </div>
      </div>
    </CartItemsContainer>
  )
}