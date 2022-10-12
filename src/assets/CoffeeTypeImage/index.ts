import Americano from './Americano.png'
import Arabe from "./Arabe.png"
import CafeComLeite from "./Cafe_com_Leite.png"
import CafeGelado from "./Cafe_Gelado.png"
import Capuccino from "./Capuccino.png"
import ChocolateQuente from "./Chocolate_Quente.png"
import Cubano from "./Cubano.png"
import ExpressoCremoso from "./Expresso_Cremoso.png"
import Expresso from "./Expresso.png"
import Havaiano from "./Havaiano.png"
import Irlandes from "./Irlandes.png"
import Latte from "./Latte.png"
import Macchiato from "./Macchiato.png"
import Mochaccino from "./Mochaccino.png"

const COFFEE_TYPES = {
  Americano: Americano,
  Arabe: Arabe,
  CafeComLeite: CafeComLeite,
  CafeGelado: CafeGelado,
  Capuccino: Capuccino,
  ChocolateQuente: ChocolateQuente,
  Cubano: Cubano,
  ExpressoCremoso: ExpressoCremoso,
  Expresso: Expresso,
  Havaiano: Havaiano,
  Irlandes: Irlandes,
  Latte: Latte,
  Macchiato: Macchiato,
  Mochaccino: Mochaccino
}

export type CoffeeType = keyof typeof COFFEE_TYPES

export function CoffeeTypeImage(coffeeType: CoffeeType) {
  return COFFEE_TYPES[coffeeType]
}