import styled from "styled-components";

export const PurchaseValuesContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 0;
  gap: 8px;

  div {
    display: flex;
    justify-content: space-between;
  }

  div > strong {
    font-size: 1.25rem;

    color: ${props => props.theme["base-subtitle"]};
  }
`