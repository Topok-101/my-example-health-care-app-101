import Geolocation from '@react-native-community/geolocation'
import {isEmpty} from 'lodash'
import React, {useEffect, useState} from 'react'
import {Alert, Linking, Platform, TouchableOpacity, View} from 'react-native'
import Animated from 'react-native-reanimated'

import {useAuthStore} from 'storez'

import {JustImage, TextHealthCare} from 'components'
import {DotPing} from 'components/dot-ping/DotPing'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import bounce from 'features/home/animations/bounce'
import wiggle from 'features/home/animations/wiggle'
import {styles} from 'features/home/style/card/HelloCard.styles'
import LottieAnimatedView from 'features/loading/LottieAnimatedView'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {getLocationName} from 'services/google-services'

import {horizontalScale, verticalScale} from 'helper'

import Icon from 'assets/image/icons'
import {lottie} from 'assets/lottie'

import {keyframes, namesScreen} from 'const'

const HelloCard = () => {
  const navigation = useNavigation()

  const {onWiggle, animatedWiggle} = wiggle(10, 4)
  const {animatedBounce, onBounce} = bounce()
  const [location, setLocation] = useState<string>('$location')
  const [request, setRequest] = useState(false)
  const [loading, setLoading] = useState(false)
  const {userFirebase} = useAuthStore()
  const user = userFirebase as {displayName: string}
  const fullName = user?.displayName && user.displayName?.split(' ')
  const firstName = fullName ? fullName[0] : undefined

  const onGetLocation = async () => {
    setLoading(true)
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords
        const name = await getLocationName(latitude, longitude)
        let country = name?.find(
          (i: {types: string[]}) => i.types[0] === 'country'
        )
        let province = name?.find(
          (i: {types: string[]}) => i.types[0] === 'administrative_area_level_1'
        )

        country = country?.long_name
        province = province?.long_name

        if (isEmpty(country) || isEmpty(province)) {
          setLocation('$unabledToLocate ')
        } else {
          setLocation(province + ' , ' + country)
        }
      },
      () => {
        setRequest(true)
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
    )
  }

  const onLocationPressed = async () => {
    onBounce()
    if (request) {
      Alert.alert(
        'Location is currently disabled.',
        'Please go to setting to enable location',
        [
          {text: 'Go to setting', onPress: () => Linking.openSettings()},
          {text: 'Cancel'}
        ]
      )
    } else {
      onGetLocation()
    }
  }
  const onNotificationPress = () => {
    navigation.navigate(namesScreen.NotificationStack as never)
  }

  useEffect(() => {
    onGetLocation().then(() => setLoading(false))
    onWiggle()
    onBounce()
    setInterval(() => {
      onWiggle()
    }, 3000)
  }, [])

  return loading ? (
    <LottieAnimatedView
      exiting={keyframes.fadeOutSize}
      lottieContainer={skeletionLoadingContainerStyle({
        width: horizontalScale(327),
        marginVertical: verticalScale(24)
      })}
      lottieStyle={skeletionLoadingStyle}
      lottiePath={lottie.skeletonCardHello}
      autoplay
      loop
    />
  ) : (
    <View style={styles.container}>
      <View>
        <View style={styles.helloContainer}>
          <TextHealthCare style={styles.helloText}>
            $hello
            {firstName ? (
              <>
                <TextHealthCare style={styles.helloText}>, </TextHealthCare>
                <TextHealthCare style={styles.helloText}>{firstName}</TextHealthCare>
              </>
            ) : null}
            <TextHealthCare style={styles.helloText}>! </TextHealthCare>
            {Platform.OS === 'ios' && (
              <Animated.View style={[animatedWiggle]}>
                <TextHealthCare style={styles.text14}>$hand</TextHealthCare>
              </Animated.View>
            )}
          </TextHealthCare>
          {Platform.OS === 'android' && (
            <Animated.View style={[animatedWiggle]}>
              <TextHealthCare style={styles.text14}>$hand</TextHealthCare>
            </Animated.View>
          )}
        </View>
        <View style={styles.locationContainer}>
          <Animated.View style={[animatedBounce]}>
            <JustImage
              source={Icon.location}
              style={styles.locationSize}
              resizeMode={'contain'}
              tintColor={colors.blue600}
            />
          </Animated.View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.locationText}
            onPress={onLocationPressed}>
            <TextHealthCare style={styles.textLocation}>{location}</TextHealthCare>
            <JustImage
              source={Icon.chevronDown}
              style={styles.icon16}
              resizeMode={'contain'}
              tintColor={colors.greyColorsGrey500}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bellcontainer}>
        <DotPing delay={0} isPing active />
        <TouchableOpacity
          onPress={onNotificationPress}
          style={styles.notificationOutline}>
          <JustImage
            source={Icon.notification}
            style={styles.bellSize}
            tintColor={colors.greyColorsGrey900}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default HelloCard
