import React, {FC, useEffect, useState} from 'react'
import {Platform, View} from 'react-native'
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'
import Reanimated, {FadeInUp} from 'react-native-reanimated'
import {SharedElement} from 'react-navigation-shared-element'
import {useAuthenticationService} from 'services'

import {IValidNPN} from 'types/hooks'

import {useAuthStore, useLoadingStore, useModalStore} from 'storez'

import {useEmailValidationAndPhoneNumber, usePasswordValidation} from 'hooks'

import {InputAwesome} from 'components'
import {ButtonHealthCare} from 'components/button'
import {ClassicHeader} from 'components/header'
import {HeaderBackLeft, HeaderTitleText} from 'components/header/items'

import {moderateScale} from 'helper'

import Images from 'assets/image/icons'

import {namesScreen} from 'const'

import {emailUserAuth} from './common'
import {
  BtnSocialLogin,
  DescriptionsUpInputLogin,
  RegisterYetLogin,
  SeparatorLogin
} from './components/longin'
import {loginStyles} from './style'

const social = [
  {img: Images.google, name: 'Google'},
  {img: Images.apple, name: 'Apple'},
  {img: Images.facebook, name: 'Facebook'}
]

const AnimatedView = Reanimated.createAnimatedComponent(View)

const HeaderRender: FC = (): JSX.Element => {
  const {setItemUser} = useAuthStore()
  const {setModal} = useModalStore()

  const {setLoading} = useLoadingStore()
  const {
    data: dataLogin,
    mutate: login,
    isSuccess: loginIsSuccess,
    isLoading
  } = useAuthenticationService()

  const [emailNumberPhone, setEmailNumberPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [StatusEmail, setStatusEmail] = useState<IValidNPN>()
  const [StatusPassword, setStatusPassword] = useState<IValidNPN>()
  const [showPassword, setShowPassword] = useState<boolean>(true)

  useEffect(() => {
    setLoading(isLoading)
    if (loginIsSuccess) {
      setItemUser(dataLogin.data)
      setTimeout(() => {
        setModal({
          visible: true,
          title: '$welcomeTitleModal',
          subTitle: '$welcomeSubTitle',
          onPress: () => {
            setModal({visible: false})
          },
          goTo: 'HomeScreen',
          image: 'SUCCESS'
        })
      }, 1000)
    }
  }, [isLoading, loginIsSuccess])

  useEffect(() => {
    emailNumberPhone === '' && emailUserAuth.onResetStatusEmail(setStatusEmail)
    password === '' && emailUserAuth.onResetStatusPassword(setStatusPassword)
  }, [emailNumberPhone, password])

  const onChangeTextEmailNumber = (text: string) => {
    setEmailNumberPhone(text)
    const emailNumberPhoneStatus = useEmailValidationAndPhoneNumber(text)
    setStatusEmail(emailNumberPhoneStatus)
  }

  const onChangeTextPassword = (text: string) => {
    setPassword(text)
    const passwordStatus = usePasswordValidation(text)
    setStatusPassword(passwordStatus)
  }

  const onLogin = async () => {
    const isSuccessed = emailUserAuth.onSubmit(
      setStatusEmail,
      setStatusPassword,
      {
        password,
        emailNumberPhone,
        StatusEmail,
        StatusPassword
      }
    )
    if (isSuccessed) {
      login({
        account_email: emailNumberPhone,
        account_password: password
      })
    }
  }

  return (
    <View>
      <ClassicHeader
        headerLeft={<HeaderBackLeft />}
        headerTitle={<HeaderTitleText text="$signIn" />}
      />
      <View style={loginStyles.contents}>
        <View>
          <InputAwesome
            placeholder="usernamePlaceholder"
            iconLeft={Images.userOutline}
            isCorrect={StatusEmail?.status.isCorrect}
            isError={StatusEmail?.status.isError}
            onChangeText={onChangeTextEmailNumber}
            value={emailNumberPhone}
            onFocus={() => emailUserAuth.onResetStatusEmail(setStatusEmail)}
          />
        </View>
        <View style={loginStyles.containerPassword}>
          <InputAwesome
            placeholder="passwordPlaceholder"
            iconLeft={Images.password}
            enableSecureTextEntry={showPassword}
            iconRight={showPassword ? Images.eyeSlash : Images.eye}
            onPressIconRight={() => setShowPassword(!showPassword)}
            isError={StatusPassword?.status.isError}
            isCorrect={StatusPassword?.status.isCorrect}
            onChangeText={onChangeTextPassword}
            value={password}
            onFocus={() =>
              emailUserAuth.onResetStatusPassword(setStatusPassword)
            }
          />
        </View>

        <View style={loginStyles.containerDescriptionsUpInputLogin}>
          <DescriptionsUpInputLogin
            isErrorEmailNumber={StatusEmail?.status.isError}
            isErrorPassword={
              !StatusEmail?.status.isError && StatusPassword?.status.isError
            }
          />
        </View>

        <SharedElement
          id={namesScreen.LoginScreen}
          style={loginStyles.containerBtn}>
          <ButtonHealthCare
            onPress={onLogin}
            title="$signIn"
            fontSize={moderateScale(16)}
            disabled={
              StatusEmail?.status.isError || StatusPassword?.status.isError
            }
            // isLoading={isLoading}
          />
        </SharedElement>

        <View style={loginStyles.containerRegisterYetLogin}>
          <RegisterYetLogin />
        </View>

        <View style={loginStyles.containerSeparatorLogin}>
          <SeparatorLogin text="$channalSignIn" />
        </View>
      </View>
    </View>
  )
}

const LoginScreen = () => {
  return (
    <KeyboardAwareFlatList
      data={social.filter(i =>
        Platform.OS === 'android' ? i.name !== 'Apple' : i.name
      )}
      renderItem={({item, index}) => (
        <AnimatedView
          entering={FadeInUp.springify()
            .mass(index)
            .delay(320 * index)
            .duration(200 * index)}
          style={loginStyles.containerListSocial}>
          <BtnSocialLogin icon={item.img} name={item.name} />
        </AnimatedView>
      )}
      ListHeaderComponent={<HeaderRender />}
      style={loginStyles.containerFlatlist}
    />
  )
}

export default LoginScreen
