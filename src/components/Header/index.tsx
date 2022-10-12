import { MapPin } from 'phosphor-react'

import { HeaderContainer, UserCityAndCountryIndicator } from "./styles";
import CoffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { CartIndicator } from './components/CartIndicator';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />
      <nav>
        <UserCityAndCountryIndicator>
          <MapPin size={19}/>
          Brasília, DF
        </UserCityAndCountryIndicator>
        <NavLink to="/checkout" title="Carrinho">
        <CartIndicator />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}