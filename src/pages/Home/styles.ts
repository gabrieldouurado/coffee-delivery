import styled from "styled-components";

export const HomeContainer = styled.div``

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5.75rem 0;

  border: 1px solid;
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 36.75rem;

  img {
    height: 20rem;
  }
`

export const Title = styled.span`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 3rem;
  color: ${props => props.theme["base-title"]};
`

export const SubTitle = styled.span`
  margin-bottom: 3.125rem;
  font-size: 1.25rem;
  color: ${props => props.theme["base-subtitle"]};
`

export const InformationGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 12px;
`