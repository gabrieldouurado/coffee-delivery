import styled from "styled-components";

export const CartIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 100%;

  border-radius: 6px;
  color: ${props => props.theme["yellow-dark"]};
  background-color: ${props => props.theme["yellow-light"]};
  `
