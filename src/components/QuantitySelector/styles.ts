import styled from "styled-components";

export const QuantitySelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 8px;

  width: 4.5rem;
  height: 2.375rem;
  
  border-radius: 6px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["base-button"]};

  span#quantity {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme["base-title"]};
  }

  svg {
    font-size: 0.875rem;
  }
`

export const AddOrRemoveQuantity = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;

  border: 0;
  color: ${props => props.theme.purple};
  background-color: transparent;

  svg:hover {
    color: ${props => props.theme["purple-dark"]}
  }
`
