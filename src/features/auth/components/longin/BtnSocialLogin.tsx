import {toString} from 'lodash'
import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {IBtnSocialLoginType} from 'types/features'
import {IModalClassic} from 'types/zustand'

import {useLoadingStore, useModalStore} from 'storez'

import {JustImage, TextHealthCare} from 'components'

import {authSocial} from 'features/auth/common'

import {colors} from 'configs/theme'

import {moderateScale, verticalScale} from 'helper'

const BtnSocialLogin: FC<IBtnSocialLoginType> = (
  props: IBtnSocialLoginType
): JSX.Element => {
  const {setLoading} = useLoadingStore()
  const {setModal} = useModalStore()

  const modalItems = {
    visible: true,
    title: '$welcomeTitleModal',
    subTitle: '$welcomeSubTitle',
    onPress: () => {
      setModal({visible: false})
    },
    goTo: 'HomeScreen',
    image: 'SUCCESS'
  }

  const modalError = (error: string) => {
    return {
      image: 'WORNG',
      visible: true,
      title: '$somethingWrong',
      subTitle: error,
      onPress: () => {
        setModal({visible: false})
      },
      onPressText: '$confirm'
    }
  }

  const authSocials = async (name: string) => {
    try {
      switch (name) {
        case 'Google':
          return await authSocial.googleAuth().then(() => {
            setLoading(false)
            setModal(modalItems as IModalClassic)
          })
        case 'Apple':
          return await authSocial.appleAuth().then(() => {
            setLoading(false)
            setModal(modalItems as IModalClassic)
          })
        case 'Facebook':
          return await authSocial.facebookAuth().then(() => {
            setLoading(false)
            setModal(modalItems as IModalClassic)
          })
      }
    } catch (error) {
      const err = error as Record<string, unknown>
      if (
        err.code !== '1000' &&
        err.code !== '-5' &&
        err.code !== undefined &&
        err.code !== '12501' &&
        toString(err) ===
          '[Error: The operation couldn’t be completed. (com.apple.AuthenticationServices.AuthorizationError error 1001.)]'
      ) {
        setModal(modalError('please try again.') as IModalClassic)
      }
      setLoading(false)
    }
  }

  return (
    <TouchableOpacity
      onPress={() => authSocials(props.name)}
      activeOpacity={0.6}
      style={styles.container}
      {...props}>
      <View>
        <JustImage
          source={props.icon}
          resizeMode={'contain'}
          style={styles.img}
        />
      </View>
      <View style={styles.containerText}>
        <TextHealthCare textType="bold" style={{fontSize: moderateScale(16)}}>
          $authWith {props.name}
        </TextHealthCare>
      </View>
    </TouchableOpacity>
  )
}

export default BtnSocialLogin

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.greyColorsGrey200,
    alignItems: 'center',
    padding: verticalScale(16),
    borderRadius: 32
  },
  containerText: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  img: {
    width: 20,
    height: 20
  }
})
