import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;

  flex-wrap: wrap;
`

export const Title = styled.div`
  padding: 2.5rem  0 1rem 0;

  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.125rem;

  color: ${props => props.theme["base-subtitle"]};
  `

export const AddressAndPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  min-width: 40rem;
`

export const AddressForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 2.5rem;
  
  border-radius: 6px;
  background-color: ${props => props.theme["base-card"]};

  svg {
    color: ${props => props.theme["yellow-dark"]};
  }
  
  div:first-child {
    display: flex;
    gap: 8px;

    div {
    display: flex;
    flex-direction: column;

    color: ${props => props.theme["base-subtitle"]};

      span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;

    gap: 16px;

    div {
      display: flex;
      gap: 12px;
    }
  }
`

export const BaseInput = styled.input`
  width: 100%;
  min-height: 2.625rem;

  padding: 12px;

  font-size: 0.825rem;

  border-radius: 4px;
  border: 1px solid ${props => props.theme["base-button"]};

  color: ${props => props.theme["base-text"]};
  background-color: ${props => props.theme["base-input"]};

  &:focus {
    outline: 1px solid ${props => props.theme["yellow-dark"]};
  }
`

export const ZipCodeInput = styled(BaseInput)`
  max-width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
  max-width: 100%;
`

export const HouseNumberInput = styled(BaseInput)`
  max-width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)``

export const DistrictInput = styled(BaseInput)`
  max-width: 12.5rem;
`

export const CityInput = styled(BaseInput)`
  max-width: 17.25rem;
`

export const StateInput = styled(BaseInput)`
  max-width: 3.75rem;
`

export const Payment = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme["base-card"]};

  div:first-child {
    display: flex;
    gap: 8px;

    svg {
      color: ${props => props.theme.purple}
    }

    div {
    display: flex;
    flex-direction: column;

    color: ${props => props.theme["base-subtitle"]};

      span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
      }
    }
  }
`

export const Cart = styled.div`
  padding: 2.5rem;
  min-width: 28rem;
  border-radius: 6px 44px;
  background-color: ${props => props.theme["base-card"]};
`

export const PurchaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 12px;

  border: 0;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 700;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme.yellow};

  &:hover {
    background-color: ${props => props.theme["yellow-dark"]};
  }
`