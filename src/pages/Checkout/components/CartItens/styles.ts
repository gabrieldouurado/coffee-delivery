import styled from "styled-components";

export const CartItensContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-subtitle"]};

  &:not(:first-child){
    padding-top: 2rem;
  }

  div.CoffeeInfo {
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding-right: 3.125rem;
  }

  div > span {
    font-weight: 700;
  }

  img {
    width: 4.25rem;
    height: 4.25rem;
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px;

  width: 5.625rem;
  height: 2.375rem;


  font-size: 0.875rem;

  border: 0;
  border-radius: 6px;

  background-color: ${props => props.theme["base-button"]};

  &:hover {
    background-color: ${props => props.theme["base-hover"]};
  }

  svg {
    color: ${props => props.theme.purple};
  }
`

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
`
