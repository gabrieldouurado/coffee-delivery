import { ShoppingCartSimple, Package, Timer } from 'phosphor-react'
import { CoffeeDeliveryInfo } from "./components/CoffeeDeliveryInfo";
import { InformationGrid, HomeContainer, InformationContainer, Intro, SubTitle, Title } from "./styles";

import CoffeeImage from "../../assets/coffee-image.svg"

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <InformationContainer>
          <Title>
            Encontre o café perfeito para qualquer hora do dia
          </Title>

          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </SubTitle>

          <InformationGrid>
            <CoffeeDeliveryInfo
              text="Compra simples e segura"
              icon={<ShoppingCartSimple />}
              backgroundColor="yellowDark"
            />
            <CoffeeDeliveryInfo
              text="Embalagem mantém o café intacto"
              icon={<Package />}
              backgroundColor="brown"
            />
            <CoffeeDeliveryInfo
              text="Entrega rápida e rastreada"
              icon={<Timer />}
              backgroundColor="yellow"
            />
            <CoffeeDeliveryInfo
              text="O café chega fresquinho até você"
              icon={<Package />}
              backgroundColor="purple"
            />
          </InformationGrid>
        </InformationContainer>
        <img src={CoffeeImage} alt="Imagem de uma embalagem descartável de café" />
      </Intro>
    </HomeContainer>
  )
}