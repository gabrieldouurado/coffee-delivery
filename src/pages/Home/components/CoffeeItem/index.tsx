import { ShoppingCartSimple } from 'phosphor-react'

import { AddToCartButton, BuyOptions, CoffeeItemContainer, CoffeeNameAndDescripion, TagsList } from "./styles";

import Espresso from '../../../../assets/coffeeTypes/Expresso.png'
import { CoffeeTypeTag } from "./components/CoffeeTypeTag";
import { QuantitySelector } from '../../../../components/QuantitySelector';

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <img src={Espresso} alt="Xícara de café" />

      <TagsList>
        <CoffeeTypeTag coffeeType="Tradicional" />
      </TagsList>

      <CoffeeNameAndDescripion>
        <span>Expresso Tradicional</span>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeNameAndDescripion>

      <BuyOptions>
        <div>
          R$ <span>9,90</span>
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