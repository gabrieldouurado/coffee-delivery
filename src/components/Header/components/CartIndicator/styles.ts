import styled from "styled-components";

export const CartIndicatorContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 100%;

  border: 0;
  border-radius: 6px;
  color: ${props => props.theme["yellow-dark"]};
  background-color: ${props => props.theme["yellow-light"]};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const CartItemsCount = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;

  border-radius: 999px;

  font-size: 0.75rem;
  font-weight: 700;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["yellow-dark"]};
`
