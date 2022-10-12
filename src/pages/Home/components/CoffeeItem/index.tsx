import { ShoppingCartSimple } from 'phosphor-react'

import { AddToCartButton, BuyOptions, CoffeeItemContainer, CoffeeNameAndDescripion, TagsList } from "./styles";

import { CoffeeTypeTag } from "./components/CoffeeTypeTag";
import { QuantitySelector } from '../../../../components/QuantitySelector';
import { CoffeeType, CoffeeTypeImage } from '../../../../assets/CoffeeTypeImage';
import { useContext, useState } from 'react';
import { CartContext } from '../../../../contexts/CartContext';

interface CoffeeItemProps {
  type: CoffeeType
  name: string
  description: string
  tags: string[]
  price: number
}

export function CoffeeItem({ type, name, description, tags, price }: CoffeeItemProps) {
  const [Quantity, setQuantity] = useState(1)

  const {newCartItem} = useContext(CartContext)
  
  const ImageCoffee = CoffeeTypeImage(type)

  function handleDecreaseQuantity() {
    if (Quantity > 1) {
      setQuantity(Quantity - 1)
    }
  }

  function handleIncreaseQuantity() {
    if (Quantity < 99) {
      setQuantity(Quantity + 1)
    }
  }

  function handleInsertNewItem() {
    const newItem = {
      type,
      name,
      price,
      quantity: Quantity
    }

    newCartItem(newItem)
  }

  return (
    <CoffeeItemContainer>
      <img src={ImageCoffee} alt="Xícara de café" />

      <TagsList>
        {tags.map(tag => {
          return <CoffeeTypeTag
            key={tag}
            coffeeType={tag} />
        })}
      </TagsList>

      <CoffeeNameAndDescripion>
        <span>{name}</span>
        {description}
      </CoffeeNameAndDescripion>

      <BuyOptions>
        <div>
          R$ <span>{price.toFixed(2).replace('.', ',')}</span>
        </div>
        <section>
          <QuantitySelector
            quantity={Quantity}
            onClickDecrease={handleDecreaseQuantity}
            onClickIncrease={handleIncreaseQuantity}
          />
          <AddToCartButton onClick={handleInsertNewItem}>
            <ShoppingCartSimple size={22} />
          </AddToCartButton>
        </section>
      </BuyOptions>

    </CoffeeItemContainer>
  )
}