import React, {FC, useState} from 'react'
import {View} from 'react-native'

import {
  ICheckBoxGroupHealthCareProps,
  ICheckBoxGroupValue
} from 'types/components/check-box-type'

import {CheckboxHealthCare, TextHealthCare} from 'components'

import {CheckboxGroupStyle} from 'features/appointment/styles/makeAppointmentScreen'

const CheckboxGroup: FC<ICheckBoxGroupHealthCareProps> = ({
  data,
  value,
  onValueChange
}) => {
  const [checkedValue, setCheckedValue] = useState<ICheckBoxGroupValue[]>(value)

  const onFilterCheckedValue = (id: number): boolean =>
    value.filter(item => item.id === id).length > 0

  const onValueGroupChange = (
    checked: boolean,
    checkedItem: ICheckBoxGroupValue
  ) => {
    let checkedValueSet = checkedValue
    if (checked) {
      const filtered = checkedValue.find(item => item.id === checkedItem.id)
      if (!filtered) {
        checkedValueSet.push(checkedItem)
      }
    } else {
      checkedValueSet = checkedValue.filter(item => item.id !== checkedItem.id)
    }
    setCheckedValue([...checkedValueSet])

    onValueChange && onValueChange(checkedValueSet)
  }

  return (
    <View>
      {data.map((item, idx) => (
        <View style={CheckboxGroupStyle.checkboxContainer} key={idx}>
          <CheckboxHealthCare
            value={onFilterCheckedValue(item.id)}
            onValueChange={checked => onValueGroupChange(checked, item)}
            customLabel={
              <TextHealthCare
                textType="semibold"
                style={CheckboxGroupStyle.textLabel}>
                {item.value}
              </TextHealthCare>
            }
          />
        </View>
      ))}
    </View>
  )
}

export default CheckboxGroup
