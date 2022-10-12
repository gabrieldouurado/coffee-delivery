import { PurchaseValuesContainer } from "./styles";

interface PurchaseValuesProps {
  totalPriceOfItems: number
  deliveryPrice: number
}

export function PurchaseValues({ totalPriceOfItems = 0.00, deliveryPrice = 0.00 }: PurchaseValuesProps) {
  const totalPurchasePrice = totalPriceOfItems + deliveryPrice

  return (
    <PurchaseValuesContainer>
      <div><span>Total de itens</span> <span>R$ {totalPriceOfItems.toFixed(2).replace('.', ',')}</span></div>
      <div><span>Entrega</span> <span>R$ {deliveryPrice.toFixed(2).replace('.', ',')}</span></div>
      <div><strong>Total</strong> <strong>R$ {totalPurchasePrice.toFixed(2).replace('.', ',')}</strong></div>
    </PurchaseValuesContainer>
  )
}