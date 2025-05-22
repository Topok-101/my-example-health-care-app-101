import React from 'react'
import {ActivityIndicator, View} from 'react-native'
import Aninimate, {BounceInDown} from 'react-native-reanimated'

import {Avartar, TextHealthCare} from 'components'

import {ChatGridStyles} from 'features/chat/styles'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import Images from 'assets/image/example'

const AninimateView = Aninimate.createAnimatedComponent(View)

const ChatGrid: React.FC<{
  isMyMessege: boolean
  bacgroundColor?: string
  messege: string
  isTyping?: boolean
}> = ({isMyMessege, bacgroundColor, messege, isTyping}) => {
  return (
    <View
      style={{
        flexDirection: isMyMessege ? 'column' : 'row',
      }}>
      {!isMyMessege && (
        <View style={{alignSelf: 'flex-end', paddingRight: 12}}>
          <Avartar image={Images.doctor2} sizeImage={32} />
        </View>
      )}
      <AninimateView
        entering={BounceInDown.duration(1000)}
        style={[
          {
            backgroundColor: bacgroundColor
              ? bacgroundColor
              : isMyMessege
              ? colors.blue600
              : colors.greyColorsGrey100,
            borderBottomLeftRadius: isMyMessege ? moderateScale(16) : 0,
            borderBottomRightRadius: !isMyMessege ? moderateScale(16) : 0,
            alignSelf: isMyMessege ? 'flex-end' : 'flex-start'
          },
          ChatGridStyles.container
        ]}>
        {isTyping ? (
          <ActivityIndicator />
        ) : (
          <TextHealthCare
            fontType="jm"
            textType="medium"
            style={{
              color: !isMyMessege ? colors.greyColorsGrey600 : colors.white
            }}>
            {messege}
          </TextHealthCare>
        )}
      </AninimateView>
    </View>
  )
}

export default ChatGrid
