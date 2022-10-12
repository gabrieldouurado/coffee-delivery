import { ReactNode } from "react";
import { CircleIconContainer } from "./styles"


interface CircleIconProps {
  icon: ReactNode;
  backgroundColor: "yellow" | "purple" | "yellowDark" | "brown"
}

export function CircleIcon({ icon, backgroundColor }: CircleIconProps) {
  return (
    <CircleIconContainer backgroundColor={backgroundColor}>
      {icon}
    </ CircleIconContainer>
  )
}