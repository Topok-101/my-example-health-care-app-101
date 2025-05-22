import React, {FC} from 'react'

import {ButtonBaseProps} from 'types/components/button-HealthCare-type'

import ButtonHealthCare from './ButtonHealthCare'
import {buttonIconStyles} from './styles/ButtonHealthCareStyle'

const ButtonIconHealthCare: FC<ButtonBaseProps> = ({...buttonBaseProps}) => {
  return (
    <ButtonHealthCare {...buttonBaseProps} style={[buttonIconStyles.button]} />
  )
}

export default ButtonIconHealthCare
