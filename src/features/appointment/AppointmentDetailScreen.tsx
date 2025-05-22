import React, {useState} from 'react'
import {FlatList, LayoutChangeEvent, TouchableOpacity, View} from 'react-native'
import Animated from 'react-native-reanimated'

import {ClassicHeader, JustImage} from 'components'

import {useNavigation} from '@react-navigation/native'

import {verticalScale} from 'helper'

import Images from 'assets/image/icons'

import {names} from 'constants/name-screen'

import {
  AppointmentDetail,
  AppointmentDetailFooter,
  AppointmentUserDetail
} from './components/appointmentDetailScreen'
import {useScrollingAnimate} from './hooks'
import {AppointmentDetailStyle} from './styles/appointmentDetailScreen'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const AppointmentDetailScreen = () => {
  const [packageCardPos, setPackageCardPos] = useState(0)
  const [clinicCardPos, setClinicCardPos] = useState(0)
  const {
    scrollHandler,
    firstCardOppacityAnimatedStyle,
    firstCardPositionAnimatedStyle,
    seccondCardOppacityAnimatedStyle,
    seccondCardPositionAnimatedStyle
  } = useScrollingAnimate(
    packageCardPos,
    clinicCardPos,
    verticalScale(164),
    verticalScale(169)
  )

  const navigation = useNavigation()

  const handleBack = () =>
    navigation && navigation.navigate(names.HomeScreen as never)
  const onPackageCardLaout = (event: LayoutChangeEvent) => {
    if (packageCardPos === 0) {
      setPackageCardPos(event.nativeEvent.layout.y)
    }
  }

  const onClinicCardLayout = (event: LayoutChangeEvent) => {
    if (clinicCardPos === 0) {
      setClinicCardPos(event.nativeEvent.layout.y)
    }
  }
  return (
    <View style={AppointmentDetailStyle.packageContainer}>
      <ClassicHeader
        title="รายละเอียดการนัดหมาย"
        headerLeft={<View />}
        headerRight={
          <TouchableOpacity onPress={handleBack}>
            <JustImage
              source={Images.close}
              style={AppointmentDetailStyle.imgClose}
            />
          </TouchableOpacity>
        }
      />
      <AnimatedFlatList
        data={[]}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={AppointmentDetailFooter}
        ListHeaderComponent={
          <Animated.View style={{flex: 1}}>
            <AppointmentDetail
              onPackageCardLaout={onPackageCardLaout}
              cardOppacityAnimatedStyle={firstCardOppacityAnimatedStyle}
              cardPositionAnimatedStyle={firstCardPositionAnimatedStyle}
            />
            <AppointmentUserDetail
              onClinicCardLayout={onClinicCardLayout}
              cardOppacityAnimatedStyle={seccondCardOppacityAnimatedStyle}
              cardPositionAnimatedStyle={seccondCardPositionAnimatedStyle}
            />
          </Animated.View>
        }
        scrollEventThrottle={16}
        renderItem={() => <></>}
      />
    </View>
  )
}

export default AppointmentDetailScreen
