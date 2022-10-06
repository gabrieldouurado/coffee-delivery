import { CoffeeTypeTagContainer } from "./styles";

interface CoffeeTypeTagProps {
  coffeeType: string
}

export function CoffeeTypeTag({ coffeeType }: CoffeeTypeTagProps) {
  return (
    <CoffeeTypeTagContainer>
      {coffeeType.toUpperCase()}
    </CoffeeTypeTagContainer>
  )
}