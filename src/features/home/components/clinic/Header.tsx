import React from 'react'
import {View} from 'react-native'

import {JustImage, TextHealthCare} from 'components'

import {stylesHeader} from 'features/home/style/clinic'

import Logo from 'assets/image/logo'

const Header: React.FC<{name: string}> = ({name}): JSX.Element => {
  return (
    <View style={stylesHeader.header}>
      <View style={stylesHeader.conImge}>
        <JustImage
          source={Logo.logoClinic}
          style={stylesHeader.img}
          resizeMode="contain"
        />
      </View>
      <View style={stylesHeader.containerText}>
        <TextHealthCare style={stylesHeader.text} textType={'bold'}>
          {name}
        </TextHealthCare>
      </View>
    </View>
  )
}

export default Header
