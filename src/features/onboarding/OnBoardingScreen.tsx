import React, {useEffect, useRef, useState} from 'react'
import {Dimensions, TouchableOpacity, View} from 'react-native'
import Animated from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import {
  CarouselRenderItem,
  ICarouselInstance
} from 'react-native-reanimated-carousel/lib/typescript/types'
import {SharedElement} from 'react-navigation-shared-element'

import {DataTypeOnboarding} from 'types/services/onboarding'

import {
  BetterImage,
  ClassicHeader,
  JustImage,
  Pagination,
  ScrollViewAware,
  TextHealthCare
} from 'components'
import {ButtonIconHealthCare, ButtonHealthCare} from 'components/button'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {moderateScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'
import Illustrate from 'assets/image/illustrate'
import Logo from 'assets/image/logo'

import {namesScreen} from '../../constants'

import animatedOnboardingScreen from './animation/animatedOnboardingScreen'
import {styles} from './style'

const OnBoardingScreen = () => {
  const width = Dimensions.get('window').width

  const carouselRef = useRef<ICarouselInstance>(null)
  const navigation = useNavigation()
  const [dot, setDot] = useState(0)
  const {
    onCarouselChange,
    onCarouselEnd,
    nextAnimationStyles,
    buttonAnimationStyle
  } = animatedOnboardingScreen(dot)

  const data = [
    {
      id: 1,
      title: `$onboardingTitle1`,
      desc: `$onboardingDesc1`,
      image: Illustrate.onboard1
    },
    {
      id: 2,
      title: `$onboardingTitle2`,
      desc: `$onboardingDesc2`,
      image: Illustrate.onboard2
    },
    {
      id: 3,
      title: `$onboardingTitle3`,
      desc: ``,
      image: Illustrate.onboard3
    }
  ]

  const onSkip = () => {
    setDot(2)
  }

  const onNext = () => {
    setDot(dot + 1)
  }

  const onLogin = () => {
    navigation.navigate('LoginScreen', {id: namesScreen.LoginScreen} as never)
  }

  const onSignup = () => {
    navigation.navigate('SignUpScreen', {id: namesScreen.SignUpScreen} as never)
  }

  useEffect(() => {
    onCarouselChange()
    carouselRef.current?.scrollTo({
      index: dot,
      animated: true
    })
  }, [dot])

  const renderItem: CarouselRenderItem<DataTypeOnboarding> = ({item}) => {
    return (
      <View>
        <BetterImage
          source={item.image}
          style={styles.imageContainer}
          resizeMode={'contain'}
        />
        {item.title && (
          <TextHealthCare style={styles.carouselTitleText} textType="bold">
            {item.title}
          </TextHealthCare>
        )}

        {item.desc && (
          <TextHealthCare style={styles.carouselDescriptionText} fontType={'jm'}>
            {item.desc}
          </TextHealthCare>
        )}
      </View>
    )
  }
  return (
    <ScrollViewAware style={styles.backgroundGrey}>
      <ClassicHeader
        headerLeft={
          <JustImage
            source={Logo.HealthCareHorizontal}
            style={styles.logoLeft}
            resizeMode={'contain'}
          />
        }
        headerRight={
          dot === 2 ? null : (
            <TouchableOpacity onPress={onSkip}>
              <TextHealthCare style={styles.skip}>$skip</TextHealthCare>
            </TouchableOpacity>
          )
        }
      />
      <View>
        <Carousel
          ref={carouselRef}
          onScrollEnd={onCarouselEnd}
          onSnapToItem={i => {
            setDot(i)
          }}
          vertical={false}
          width={width}
          height={moderateScale(460)}
          data={data}
          renderItem={renderItem}
        />
        <Pagination
          paginationIndex={dot}
          paginationActiveColor={colors.blue600}
          paginationStyleItem={styles.paginationItem}
          paginationStyle={styles.paginationContainer}
          size={data.length}
          scrollToIndex={i => setDot(i.index)}
        />
      </View>
      <View style={styles.alignCenter}>
        {dot === 2 ? (
          <Animated.View style={[styles.buttonContainer, buttonAnimationStyle]}>
            <SharedElement
              id={namesScreen.LoginScreen}
              style={styles.buttonSignin}>
              <ButtonHealthCare
                title="$signIn"
                onPress={onLogin}
                fontSize={moderateScale(20)}
              />
            </SharedElement>
            <View style={styles.buttonSignUp}>
              <ButtonHealthCare
                onPress={onSignup}
                type="outline"
                title="$signUp"
                fontSize={moderateScale(20)}
              />
            </View>
          </Animated.View>
        ) : (
          <Animated.View style={[styles.button, nextAnimationStyles]}>
            <ButtonIconHealthCare
              IconStart={Images.arrowRight}
              style={styles.img}
              onPress={onNext}
            />
          </Animated.View>
        )}
      </View>
    </ScrollViewAware>
  )
}

export default OnBoardingScreen
