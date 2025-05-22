import {isEmpty} from 'lodash'
import React from 'react'
import {Dimensions, View} from 'react-native'
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'

import {AnimatedFastImage} from 'components'

import {stylesBanner} from 'features/home/style/clinic'

import { IClinicMainBanner } from 'types/features/home-type'

const {height} = Dimensions.get('window')
const BannerClinic: React.FC<IClinicMainBanner> = (props): JSX.Element => {
  const {translationY, img} = props
  const stylesAnimated = useAnimatedStyle(() => {
    const O = interpolate(
      translationY.value,
      [0, height, height * 3],
      [1, 1, 0],
      Extrapolate.CLAMP
    )
    return {
      opacity: O
    }
  })
  return !isEmpty(img) ? (
    <View>
      <AnimatedFastImage
        source={{uri: img}}
        style={[stylesBanner.img, stylesAnimated]}
        resizeMode={'cover'}
      />
    </View>
  ) : (
    <View style={stylesBanner.img}/>
  )
}

export default BannerClinic
