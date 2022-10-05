import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.5rem;

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 12px;
    height: 2.375rem;
  }
`

export const UserCityAndCountryIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 9rem;
  height: 100%;
  padding: 8px;
  
  border-radius: 8px;

  font-size: 0.875rem;
  line-height: 1.3;
  color: ${props => props.theme["purple-dark"]};

  background-color: ${props => props.theme["purple-light"]};
`
