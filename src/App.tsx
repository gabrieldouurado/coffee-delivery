import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartContext"
import { CheckoutContextProvider } from "./contexts/CheckoutContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <CheckoutContextProvider>
            <Router />
          </CheckoutContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
