import { ShoppingCartSimple } from 'phosphor-react'

import { AddToCartButton, BuyOptions, CoffeeItemContainer, CoffeeNameAndDescripion, TagsList } from "./styles";

import { CoffeeTypeTag } from "./components/CoffeeTypeTag";
import { QuantitySelector } from '../../../../components/QuantitySelector';
import { CoffeeType, CoffeeTypeImage } from '../../../../assets/CoffeeTypeImage';

interface CoffeeItemProps {
  type: CoffeeType
  name: string
  description: string
  tags: string[]
  price: number
}

export function CoffeeItem({ type, name, description, tags, price }: CoffeeItemProps) {
  const ImageCoffee = CoffeeTypeImage(type)

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
          R$ <span>{price}</span>
        </div>
        <section>
          <QuantitySelector />
          <AddToCartButton>
            <ShoppingCartSimple size={22} />
          </AddToCartButton>
        </section>
      </BuyOptions>

    </CoffeeItemContainer>
  )
}