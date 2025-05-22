import React from 'react'
import {ActivityIndicator, TouchableOpacity, TouchableOpacityProps, View} from 'react-native'
import Animated, {BounceInUp} from 'react-native-reanimated'

import {JustImage, TextHealthCare} from 'components'

import {stylesBacktoTop} from 'features/home/style/clinic'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'

const BackToTop = (props: TouchableOpacityProps & {isFetching: boolean}) => {
  return (
    <Animated.View entering={BounceInUp} style={stylesBacktoTop.continer}>
      {props.isFetching ? (
        <ActivityIndicator color={colors.blue500} size={'large'} />
      ) : (
        <>
          <TextHealthCare style={stylesBacktoTop.textAll}>$thisIsAll</TextHealthCare>
          <TouchableOpacity style={{flexDirection: 'row'}} {...props}>
            <View style={stylesBacktoTop.subContainer}>
              <TextHealthCare style={stylesBacktoTop.textToTop}>
                $backToTop
              </TextHealthCare>
            </View>
            <View style={{justifyContent: 'center'}}>
              <JustImage
                source={Images.chevronUp}
                style={stylesBacktoTop.img}
                tintColor={colors.blue400}
              />
            </View>
          </TouchableOpacity>
        </>
      )}
    </Animated.View>
  )
}

export default BackToTop
