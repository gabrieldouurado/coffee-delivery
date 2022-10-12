import styled from "styled-components";

export const PaymentMethodSelectorContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const PaymentTypeButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 12px;
  padding: 1rem;

  width: 11.25rem;
  height: 3.25rem;

  font-size: 0.75rem;

  border: 0;
  border-radius: 6px;
  background-color: ${props => props.theme["base-button"]};

  &:hover {
    background-color: ${props => props.theme["base-hover"]};
  }

  svg {
    color: ${props => props.theme.purple};
  }

  &[value="selected"] {
    border: 1px solid ${props => props.theme.purple};
    background-color: ${props => props.theme["purple-light"]};
  }
`