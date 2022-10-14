import styled from "styled-components";

export const SuccessContainer = styled.div``

export const SuccessTitleAndSubtittle = styled.header`
  display: flex;
  flex-direction: column;

  padding: 5rem 0 2.5rem 0;

  font-size: 1.25rem;
  color: ${props => props.theme["base-subtitle"]};

  span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme["yellow-dark"]};
  }
`

export const OrderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30.75rem;
  }
`

export const OrderInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 32.875rem;
  height: 16.875rem;
  padding: 2.5rem;

  border: 1px solid;
  border-radius: 6px 36px;

  div {
    display: flex;
    align-items: center;

    gap: 12px;

    section {
      display: flex;
      flex-direction: column;
    }
  }
`