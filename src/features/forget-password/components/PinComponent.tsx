import {isEmpty} from 'lodash'
import React, {FC, useEffect, useRef, useState} from 'react'
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View
} from 'react-native'

import {IPinComponentProps} from 'types/components/pin-type'

import SmallInput from 'components/typography/SmallInput'

import {pinStyles} from './PinStyles'

const PinComponent: FC<IPinComponentProps> = ({
  pinLength,
  onChangePin,
  status
}) => {
  const [values, setValues] = useState<string[]>([])
  const inputPinRef = useRef<(TextInput | null)[]>([])

  useEffect(() => {
    const _values = new Array(pinLength).map(() => '')
    inputPinRef.current[0]?.focus()
    setValues([..._values])
  }, [pinLength])

  useEffect(() => {
    if (status?.status.isError) {
      for (let i = 0; i < values.length; i++) {
        const value = values[i]
        if (isEmpty(value)) {
          inputPinRef.current[i]?.focus()
          break
        }
      }
    }
  }, [status])

  const handleChangeText = (value: string, index: number) => {
    const _values = values
    _values[index] = value

    onChangePin(_values.toString().replace(new RegExp(',', 'g'), ''))
    if (!isEmpty(_values[index])) {
      const currentIdx =
        index > pinLength - 1 || index === pinLength - 1 ? index : index + 1
      inputPinRef.current[currentIdx]?.focus()
      if (currentIdx + 1 !== _values.length) {
        _values[currentIdx] = ''
      }
    }
    setValues([..._values])
  }

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const {nativeEvent} = event
    if (nativeEvent.key === 'Backspace') {
      const previousIndex = index - 1 < 0 ? index : index - 1
      const _values = values

      if (isEmpty(values[index])) {
        _values[previousIndex] = ''

        inputPinRef.current[previousIndex]?.focus()
      }
      onChangePin(_values.toString().replace(new RegExp(',', 'g'), ''))
      setValues([..._values])
    }
  }
  return (
    <View style={[pinStyles.container]}>
      {values.map((value, idx) => (
        <SmallInput
          isSingleValue
          isError={status?.status.isError}
          keyboardType="number-pad"
          key={idx}
          value={value}
          ref={el => (inputPinRef.current[idx] = el)}
          onChangeText={val => handleChangeText(val, idx)}
          onKeyPress={event => handleKeyPress(event, idx)}
        />
      ))}
    </View>
  )
}

export default PinComponent
