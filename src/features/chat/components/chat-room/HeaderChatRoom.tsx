import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import FastImage, {Source} from 'react-native-fast-image'
import {SharedElement} from 'react-navigation-shared-element'

import {Avartar, TextHealthCare} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {HeaderChatRoomStyles} from 'features/chat/styles'

import {colors} from 'configs/theme'

import Images from 'assets/image/example'
import Icons from 'assets/image/icons'

const HeaderChatRoom: React.FC<{idElement: string}> = ({
  idElement
}): JSX.Element => {
  const ItemTouch: React.FC<{
    icon: Source
    onPress?: () => void
  }> = ({icon}) => {
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <FastImage
          source={icon}
          style={HeaderChatRoomStyles.iconL}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={HeaderChatRoomStyles.container}>
      <View style={HeaderChatRoomStyles.subContainer}>
        <BackLeft />
        <SharedElement
          id={idElement}
          style={HeaderChatRoomStyles.containerAvatar}>
          <Avartar image={Images.doctor1} sizeImage={40} />
        </SharedElement>
        <View>
          <TextHealthCare style={HeaderChatRoomStyles.font16} textType="bold">
            นทพญ.ปวีณา ขำดำ
          </TextHealthCare>
          <TextHealthCare style={{fontSize: 12, color: colors.blue600}}>
            ออนไลน์
          </TextHealthCare>
        </View>
      </View>
      <View style={HeaderChatRoomStyles.containerRight}>
        <View style={HeaderChatRoomStyles.subContainerRight}>
          <ItemTouch icon={Icons.phone} />
        </View>
        <ItemTouch icon={Icons.videoConferance} />
      </View>
    </View>
  )
}

export default HeaderChatRoom
