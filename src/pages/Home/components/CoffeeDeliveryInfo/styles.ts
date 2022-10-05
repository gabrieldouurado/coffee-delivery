import styled from "styled-components";

export const CoffeeDeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

`

const CIRCLE_COLORS = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  brown: "base-text",
  purple: "purple"
} as const

interface CircleProps {
  backgroundColor: keyof typeof CIRCLE_COLORS
}

export const Circle = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  border-radius: 999px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme[CIRCLE_COLORS[props.backgroundColor]]};
`