import { ReactNode } from "react";
import { CircleIcon } from "../../../../components/CircleIcon";
import { CoffeeDeliveryInfoContainer } from "./styles";


interface CoffeeDeliveryInfoProps {
  text: string;
  icon: ReactNode;
  backgroundColor: "yellow" | "purple" | "yellowDark" | "brown"
}

export function CoffeeDeliveryInfo({ text, icon, backgroundColor }: CoffeeDeliveryInfoProps) {
  return (
    <CoffeeDeliveryInfoContainer>
      <CircleIcon backgroundColor={backgroundColor} icon={icon}/>
      {text}
    </CoffeeDeliveryInfoContainer>
  )
}