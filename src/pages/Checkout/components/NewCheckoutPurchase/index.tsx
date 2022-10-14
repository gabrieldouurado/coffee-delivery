import { useFormContext } from "react-hook-form";
import { CityInput, ComplementInput, DistrictInput, HouseNumberInput, NewCheckoutPurchaseContainer, StateInput, StreetInput, ZipCodeInput } from "./styles";

export function NewCheckoutPurchase() {
  const { register } = useFormContext()

  return (
    <NewCheckoutPurchaseContainer>
        <ZipCodeInput
          placeholder='CEP'
          {...register('zipCode')}
        />
        <StreetInput
          placeholder='Rua'
          {...register('street')}
        />

        <div>
          <HouseNumberInput
            placeholder='Número'
            {...register('houseNumber')}
          />
          <ComplementInput
            placeholder="Complemento"
            {...register('complement')}
          />
        </div>
        <div>
          <DistrictInput
            placeholder="Bairro"
            {...register('district')}
          />
          <CityInput
            placeholder="Cidade"
            {...register('city')}
          />
          <StateInput
            placeholder='UF'
            {...register('state')}
          />
        </div>
    </NewCheckoutPurchaseContainer>
  )
}