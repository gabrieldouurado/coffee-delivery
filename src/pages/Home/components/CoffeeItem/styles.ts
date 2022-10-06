import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  min-width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;
  background-color: ${props => props.theme["base-card"]};

  img {
    margin-top: -20px;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const TagsList = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const CoffeeNameAndDescripion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0 1.25rem;
  margin-bottom: 2rem;

  text-align: center;
  font-size: 0.875rem;

  color: ${props => props.theme["base-label"]};

  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.25rem;

    color: ${props => props.theme["base-subtitle"]};
  }
`

export const BuyOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1.25rem;

  width: 100%;
  height: 2.375rem;

  
  div {
    gap: 8px;
    font-size: 0.875rem;

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  section {
    display: flex;
    gap: 8px;
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;

  border: 0;
  border-radius: 6px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["purple-dark"]};
`