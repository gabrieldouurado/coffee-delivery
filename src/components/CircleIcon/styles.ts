import styled from "styled-components";

const CIRCLE_COLORS = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  brown: "base-text",
  purple: "purple"
} as const

interface CircleProps {
  backgroundColor: keyof typeof CIRCLE_COLORS
}

export const CircleIconContainer = styled.div<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  border-radius: 999px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme[CIRCLE_COLORS[props.backgroundColor]]};
`
