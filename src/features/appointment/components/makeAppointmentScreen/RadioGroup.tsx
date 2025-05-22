import React, {FC} from 'react'
import {View} from 'react-native'

import {
  ICheckBoxGroupValue,
  IRadioBoxGroupHealthCareProps
} from 'types/components/check-box-type'

import {RadioHealthCare} from 'components/radio'

import {CheckboxGroupStyle} from 'features/appointment/styles/makeAppointmentScreen'

import {colors} from 'configs/theme'

const RadioGroup: FC<IRadioBoxGroupHealthCareProps> = ({
  data,
  value,
  onValueChange
}) => {
  const onFilterCheckedValue = (id: number): boolean => {
    return value?.id === id
  }

  const activeStateChecked = (id: number): boolean => {
    return value ? value?.id === id : true
  }

  const onValueGroupChange = (checkedItem: ICheckBoxGroupValue) => {
    onValueChange && onValueChange(checkedItem)
  }

  return (
    <View>
      {data.map((item, idx) => (
        <View style={CheckboxGroupStyle.checkboxContainer} key={idx}>
          <RadioHealthCare
            value={onFilterCheckedValue(item.id)}
            onValueChange={() => onValueGroupChange(item)}
            label={item.value}
            isActive={activeStateChecked(item.id)}
            colorTextActive={value ? colors.blue600 : colors.greyColorsGrey900}
          />
        </View>
      ))}
    </View>
  )
}

export default RadioGroup
