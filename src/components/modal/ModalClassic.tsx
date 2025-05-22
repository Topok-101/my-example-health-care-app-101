import React, {FC, useEffect, useState} from 'react'
import {ModalProps, StyleSheet, View} from 'react-native'

import {useModalStore} from 'storez'

import {ButtonHealthCare} from 'components/button'
import {BetterImage, TextHealthCare} from 'components/typography'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

import Image from 'assets/image/modal'

import ModalHealthCare from './ModalHealthCare'

const ModalClassic: FC<ModalProps> = (props: ModalProps) => {
  const [images, setIamge] = useState<number>()
  const navigation = useNavigation()
  const {
    visible,
    goTo,
    image,
    onCancel,
    onPress,
    onPressText,
    subTitle,
    title
  } = useModalStore()

  useEffect(() => {
    switch (image) {
      case 'LOCATION':
        setIamge(Image.Location)
        break
      case 'LOGOUT':
        setIamge(Image.Logout)
        break

      case 'SUCCESS':
        setIamge(Image.Ribbon)
        break

      case 'WORNG':
        setIamge(Image.SomethingWrong)
        break

      default:
        break
    }
  }, [image])

  return (
    <ModalHealthCare visible={visible} animationType="fade" {...props}>
      <View style={styles.container}>
        <BetterImage source={images} style={styles.img} resizeMode="contain" />
        <View style={styles.title}>
          <TextHealthCare
            style={{textAlign: 'center', fontSize: moderateScale(20)}}
            textType="bold">
            {title}
          </TextHealthCare>
        </View>
        <View style={styles.subTitle}>
          <TextHealthCare
            style={{textAlign: 'center', fontSize: moderateScale(16)}}>
            {subTitle}
          </TextHealthCare>
        </View>
        {/* {onPress && ( */}
        <View>
          <ButtonHealthCare
            title={onPressText ? onPressText : '$welcomeGotoFristPage'}
            fontSize={moderateScale(16)}
            onPress={() => {
              goTo && navigation.navigate(goTo as never)
              onPress && onPress()
            }}
          />
        </View>
        {/* )} */}
        {onCancel && (
          <View style={styles.buttonCanel}>
            <ButtonHealthCare
              textOutlineColor={colors.greyColorsGrey800}
              type="outline"
              title={'$tryAgainLater'}
              fontSize={moderateScale(16)}
              onPress={() => {
                goTo && navigation.navigate(goTo as never)
                onCancel()
              }}
            />
          </View>
        )}
      </View>
    </ModalHealthCare>
  )
}

export default ModalClassic

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: horizontalScale(327),
    minHeight: verticalScale(401),
    alignItems: 'center',
    padding: verticalScale(32),
    borderRadius: 24
  },
  buttonCanel: {
    marginTop: verticalScale(24)
  },
  img: {
    width: horizontalScale(158),
    height: verticalScale(128)
  },
  title: {paddingTop: verticalScale(24)},
  subTitle: {paddingBottom: verticalScale(24), paddingTop: verticalScale(8)}
})
