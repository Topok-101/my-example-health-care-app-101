import React from 'react'
import {View} from 'react-native'

import {Avartar, TextHealthCare} from 'components'

import {moderateScale} from 'helper'

import Images from 'assets/image/example'

import {UserTitleStlye} from '../../style/accountScreen'

const UserTitle = () => {
  return (
    <View style={UserTitleStlye.container}>
      <View style={UserTitleStlye.containerAvatar}>
        <Avartar image={Images.AvatarU} sizeImage={56} />
      </View>
      <View>
        <TextHealthCare textType="bold" style={{fontSize: moderateScale(16)}}>
          จิราวัฒน์ แก้วกัน
        </TextHealthCare>
        <TextHealthCare textType="light">เชียงใหม่, ประเทศไทย</TextHealthCare>
      </View>
    </View>
  )
}

export default UserTitle
