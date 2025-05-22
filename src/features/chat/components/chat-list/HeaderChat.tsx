import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {IconBounceIn, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'
import { HeaderChatStyles } from 'features/chat/styles'

const activeOpacity = 0.5

const HeaderChat = () => {
  return (
    <SafeAreaView>
      <View style={HeaderChatStyles.container}>
        <TextHealthCare textType="bold" style={HeaderChatStyles.title}>
          $massageBox
        </TextHealthCare>
        <View style={HeaderChatStyles.containerIcons}>
          <TouchableOpacity
            activeOpacity={activeOpacity}
            style={HeaderChatStyles.iconRight}>
            <IconBounceIn
              image={Images.search}
              hight={24}
              width={24}
              color={colors.greyColorsGrey900}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={activeOpacity}>
            <IconBounceIn
              image={Images.plus}
              hight={24}
              width={24}
              color={colors.greyColorsGrey900}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HeaderChat
