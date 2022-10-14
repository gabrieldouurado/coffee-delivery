import styled from "styled-components";

export const NewCheckoutPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;

  div {
    display: flex;
    gap: 12px;
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