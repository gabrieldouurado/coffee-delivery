import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../assets/CoffeeTypeImage";

export interface CartItemsType {
  type: CoffeeType
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  CartItems: CartItemsType[]
  newCartItem: (newItem: CartItemsType) => void
  changeItemQuantity: (item: string, newQuantity: number) => void
  removeItemOfCart: (itemForRemove: string) => void
  clearCartItems: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [CartItems, setCartItems] = useState<CartItemsType[]>([])

  function newCartItem(newItem: CartItemsType) {
    if (CartItems.length !== 0) {
      const positionIndex = CartItems.findIndex(item => {
        return item.type === newItem.type
      })

      if (positionIndex >= 0) {
        let quantityCount = CartItems[positionIndex].quantity + newItem.quantity
        if (quantityCount < 99) {
          CartItems[positionIndex].quantity += newItem.quantity
          setCartItems([...CartItems])
        } else {
          CartItems[positionIndex].quantity = 99
          setCartItems([...CartItems])
        }
      } else {
        setCartItems([...CartItems, newItem])
      }
    } else {
      setCartItems([...CartItems, newItem])
    }
  }

  function changeItemQuantity(coffeName: string, newQuantity: number) {
    if (newQuantity > 0 && newQuantity <= 99) {
      const positionIndex = CartItems.findIndex(item => {
        return item.name === coffeName
      })

      CartItems[positionIndex].quantity = newQuantity
      setCartItems([...CartItems])
    }
  }

  function removeItemOfCart(itemForRemove: string) {
    const CartItemsWithoutRemovedItem = CartItems.filter(item => {
      return item.name !== itemForRemove
    })

    setCartItems(CartItemsWithoutRemovedItem)
  }

  function clearCartItems(){
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        CartItems,
        newCartItem,
        changeItemQuantity,
        removeItemOfCart,
        clearCartItems
      }}>
      {children}
    </CartContext.Provider>
  )
}