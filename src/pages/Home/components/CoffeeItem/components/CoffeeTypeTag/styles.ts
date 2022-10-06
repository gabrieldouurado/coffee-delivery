import styled from "styled-components";

export const CoffeeTypeTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 8px;

  font-size: 0.625rem;
  font-weight: 700;

  border-radius: 100px;

  color: ${props => props.theme["yellow-dark"]};
  background-color: ${props => props.theme["yellow-light"]};
`