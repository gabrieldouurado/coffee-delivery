import { createContext, ReactNode, useState } from "react";
import { CoffeeType } from "../assets/CoffeeTypeImage";

interface CartItemsType {
  type: CoffeeType
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  CartItems: CartItemsType[]
  newCartItem: (newItem: CartItemsType) => void
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
        CartItems[positionIndex].quantity += newItem.quantity
        setCartItems([...CartItems])
      } else {
        setCartItems([...CartItems, newItem])
      }
    } else {
      setCartItems([...CartItems, newItem])
    }
  }

  return (
    <CartContext.Provider
      value={{
        CartItems,
        newCartItem
      }}>
      {children}
    </CartContext.Provider>
  )
}