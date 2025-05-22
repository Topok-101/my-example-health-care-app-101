import React from 'react'
import {ListRenderItem, View} from 'react-native'
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'
import {SafeAreaView} from 'react-native-safe-area-context'

import {ButtonHealthCare, InputAwesome, TextHealthCare} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'
import { ChangePasswordScreenStyles } from './style/changePasswordScreen/ChangePasswordScreen.style'

export default function ChangePassword() {
  const [CurrentPassword, setCurrentPassword] = React.useState({
    showPassword: true,
    title: '$inputCurrentPassword',
    placeholder: 'inputCurrentPassword'
  })
  const [NewPassword, setNewPassword] = React.useState({
    showPassword: true,
    title: '$enterNewPassword',
    placeholder: 'confirmPasswordPlaceholder'
  })
  const [ConfirmPassword, setConfirmPassword] = React.useState({
    showPassword: true,
    title: '$confirmPassword',
    placeholder: 'confirmPasswordPlaceholder'
  })

  const form = [CurrentPassword, NewPassword, ConfirmPassword]

  const onChangePassword = (index: number) => {
    index === 0 &&
      setCurrentPassword({
        ...CurrentPassword,
        showPassword: !CurrentPassword.showPassword
      })
    index === 1 &&
      setNewPassword({
        ...NewPassword,
        showPassword: !NewPassword.showPassword
      })
    index === 2 &&
    setConfirmPassword({
        ...ConfirmPassword,
        showPassword: !ConfirmPassword.showPassword
      })
  }

  const FormInput: ListRenderItem<{
    showPassword: boolean
    title: string
    placeholder: string
    setPassword: () => void
  }> = ({item, index}) => {
    return (
      <View style={ChangePasswordScreenStyles.subContainer}>
        <TextHealthCare style={ChangePasswordScreenStyles.titleinput}>{item.title}</TextHealthCare>
        <InputAwesome
          iconLeft={Images.password}
          iconRight={item.showPassword ? Images.eyeSlash : Images.eye}
          placeholder={item.placeholder}
          enableSecureTextEntry={item.showPassword}
          onPressIconRight={() => onChangePassword(index)}
        />
      </View>
    )
  }

  return (
    <KeyboardAwareFlatList
      style={{backgroundColor: colors.white}}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <SafeAreaView style={ChangePasswordScreenStyles.header}>
            <BackLeft />
          </SafeAreaView>
          <View style={ChangePasswordScreenStyles.containerTitle}>
            <TextHealthCare style={ChangePasswordScreenStyles.text24} textType="bold">
              $passwordEditor
            </TextHealthCare>
            <TextHealthCare style={ChangePasswordScreenStyles.text16} textType="light">
              $createYourPasswordForSignIn
            </TextHealthCare>
          </View>
        </>
      }
      data={form}
      renderItem={FormInput}
      ListFooterComponentStyle={ChangePasswordScreenStyles.footer}
      ListFooterComponent={
        <ButtonHealthCare title="$createNewPassword" fontSize={16} />
      }
    />
  )
}