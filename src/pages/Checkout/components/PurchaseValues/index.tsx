import { PurchaseValuesContainer } from "./styles";

export function PurchaseValues() {
  return (
    <PurchaseValuesContainer>
      <div><span>Total de itens</span> <span>R$ 29,70</span></div>
      <div><span>Entrega</span> <span>R$ 3,50</span></div>
      <div><strong>Total</strong> <strong>R$ 33,20</strong></div>
    </PurchaseValuesContainer>
  )
}