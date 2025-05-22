import React from 'react'
import {
  InputAccessoryView,
  LayoutChangeEvent,
  Platform,
  View
} from 'react-native'

import {InputAwesome} from 'components'

import {TextAreaChatStyle} from 'features/chat/styles'

import {colors} from 'configs/theme'

import {verticalScale} from 'helper'

import Images from 'assets/image/icons'

const TextAreaChat: React.FC<{
  MessageMap: (item: {isMyMessage: boolean; message: string}) => void
  heightMeasure: (height: number) => void
}> = ({MessageMap, heightMeasure}) => {
  const [Message, setMessage] = React.useState<string>('')

  const onSend = () => {
    if (Message !== '') {
      MessageMap({
        isMyMessage: true,
        message: Message
      })
      return setMessage('')
    }
  }

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout
    heightMeasure(height)
  }

  return Platform.OS === 'ios' ? (
    <InputAccessoryView>
      <View style={TextAreaChatStyle.container} onLayout={onLayout}>
        <InputAwesome
          multiline
          iconRight={Images.send}
          iconRightSize={24}
          iconRightColor={colors.blue600}
          onPressIconRight={onSend}
          placeholder={'textAreaChat'}
          IsMaxHeight={verticalScale(200)}
          onChangeText={setMessage}
          value={Message}
        />
      </View>
    </InputAccessoryView>
  ) : (
    <View style={TextAreaChatStyle.container} onLayout={onLayout}>
      <InputAwesome
        multiline
        iconRight={Images.send}
        iconRightSize={24}
        iconRightColor={colors.blue600}
        onPressIconRight={onSend}
        placeholder={'textAreaChat'}
        IsMaxHeight={verticalScale(200)}
        onChangeText={setMessage}
        value={Message}
      />
    </View>
  )
}

export default TextAreaChat
