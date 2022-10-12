import { ShoppingCartSimple, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeDeliveryInfo } from "./components/CoffeeDeliveryInfo";
import { InformationGrid, HomeContainer, InformationContainer, Intro, SubTitle, Title, CoffeeList } from "./styles";

import { CoffeeType } from "../../assets/CoffeeTypeImage"
import { CoffeeItem } from './components/CoffeeItem'
import CoffeeImage from "../../assets/coffee-image.svg"

type CoffeeTags = 'Tradicional' | 'Gelado' | 'Com Leite' | 'Alcoólico' | 'Especial'

interface CoffeeList {
  type: CoffeeType
  name: string
  description: string
  tags: CoffeeTags[]
  price: number
}

const CoffeesListMock: CoffeeList[] = [
  {
    type: "Expresso",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["Tradicional"],
    price: 1.99
  },
  {
    type: "Americano",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["Tradicional"],
    price: 2.99
  },
  {
    type: "ExpressoCremoso",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["Tradicional"],
    price: 3.99
  },
  {
    type: "CafeGelado",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["Tradicional", 'Gelado'],
    price: 4.99
  },
  {
    type: "CafeComLeite",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["Tradicional", 'Com Leite'],
    price: 5.99
  },
  {
    type: "Latte",
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["Tradicional", 'Com Leite'],
    price: 6.99
  },
  {
    type: "Capuccino",
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["Tradicional", 'Com Leite'],
    price: 7.99
  },
  {
    type: "Macchiato",
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", 'Com Leite'],
    price: 8.99
  },
  {
    type: "Mochaccino",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["Tradicional", 'Com Leite'],
    price: 9.99
  },
  {
    type: "ChocolateQuente",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["Especial", 'Com Leite'],
    price: 10.99
  },
  {
    type: "Cubano",
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["Especial", 'Alcoólico', 'Gelado'],
    price: 11.99
  },
  {
    type: 'Havaiano',
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["Especial"],
    price: 12.99
  },
  {
    type: 'Arabe',
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["Especial"],
    price: 13.99
  },
  {
    type: 'Irlandes',
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["Especial", 'Alcoólico'],
    price: 14.99
  }
]

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
              icon={<Coffee />}
              backgroundColor="purple"
            />
          </InformationGrid>
        </InformationContainer>

        <img src={CoffeeImage} alt="Imagem de uma embalagem descartável de café" />

      </Intro>
      <header>Nossos cafés</header>
      <CoffeeList>
        {
          CoffeesListMock.map(coffee => {
            return <CoffeeItem
              key={coffee.name}
              type={coffee.type}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
              price={coffee.price}
            />
          })
        }
      </CoffeeList>
    </HomeContainer>
  )
}