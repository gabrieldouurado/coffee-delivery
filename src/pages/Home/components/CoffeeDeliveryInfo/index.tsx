import { ReactNode } from "react";
import { Circle, CoffeeDeliveryInfoContainer } from "./styles";

interface CoffeeDeliveryInfoProps {
  text: string;
  icon: ReactNode;
  backgroundColor: "yellow" | "purple" | "yellowDark" | "brown"
}

export function CoffeeDeliveryInfo({ text, icon, backgroundColor }: CoffeeDeliveryInfoProps) {
  return (
    <CoffeeDeliveryInfoContainer>
      <Circle backgroundColor={backgroundColor}>
        {icon}
      </Circle>
      {text}
    </CoffeeDeliveryInfoContainer>
  )
}