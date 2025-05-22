import {isEmpty} from 'lodash'
import React, {FC, useEffect, useState} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {SignUpFormProps} from 'types/features/sign-up-type'
import {IValidNPN} from 'types/hooks'

import {useForgetPasswordStore, useLoadingStore, useModalStore} from 'storez'

import {
  usePasswordLengthValidation,
  usePasswordLetterValidation,
  usePasswordValidation,
  useValidateComparePassword
} from 'hooks/use-validation'

import {InputAwesome, JustImage, TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import Images from 'assets/image/icons'

import {namesScreen} from 'const'

const AnimatedView = Animated.createAnimatedComponent(View)
const ForgetPasswordStep3: FC<SignUpFormProps> = ({prevStep = 0}) => {
  const {formStep3, formCurrentStep, setFormStep3, resetStep} =
    useForgetPasswordStore()
  const {setLoading} = useLoadingStore()
  const {setModal} = useModalStore()

  const navigation = useNavigation()
  const [statusPassword, setStatusPassword] = useState<IValidNPN>()
  const [statusConfirmPassword, setStatusConfirmPassword] =
    useState<IValidNPN>()
  const [disableNext, setDisableNext] = useState(true)
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState(true)
  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  useEffect(() => {
    const validatePassword = usePasswordValidation(formStep3.password)
    const validateComparePassword = useValidateComparePassword(
      formStep3.password,
      formStep3.confirmPassword
    )
    if (
      validatePassword?.status.isCorrect &&
      validateComparePassword?.status.isCorrect
    ) {
      setDisableNext(false)
    } else {
      setDisableNext(true)
    }
  }, [formStep3])

  const formForgetPassword = [
    {
      id: 0,
      placeholder: 'passwordPlaceholder',
      image: Images.password,
      value: formStep3.password,
      onChange: (value: string) => handleChangePassword(value),
      isError: statusPassword?.status.isError,
      isCorrect: statusPassword?.status.isCorrect,
      message: statusPassword?.message,
      enableSecureTextEntry: showPassword,
      showPassword: showPassword,
      onPressIconRight: () => setShowPassword(!showPassword)
    },
    {
      id: 1,
      placeholder: 'confirmPasswordPlaceholder',
      image: Images.password,
      value: formStep3.confirmPassword,
      onChange: (value: string) => handleChangeConfirmPassword(value),
      isError: statusConfirmPassword?.status.isError,
      isCorrect: statusConfirmPassword?.status.isCorrect,
      message: statusConfirmPassword?.message,
      enableSecureTextEntry: showConfirmPassword,
      showPassword: showConfirmPassword,
      onPressIconRight: () => setShowConfirmPassword(!showConfirmPassword)
    }
  ]

  const handleChangePassword = (value: string) => {
    const validate = usePasswordValidation(value)

    if (!isEmpty(formStep3.confirmPassword)) {
      const validateConfirm = useValidateComparePassword(
        value,
        formStep3.confirmPassword
      )
      setStatusConfirmPassword(validateConfirm)
    }

    setStatusPassword(validate)
    setFormStep3({
      ...formStep3,
      password: value
    })
  }
  const handleChangeConfirmPassword = (value: string) => {
    const validate = useValidateComparePassword(formStep3.password, value)
    setStatusConfirmPassword(validate)
    setFormStep3({
      ...formStep3,
      confirmPassword: value
    })
    // setConfirmPassword(value)
  }

  const handleNextStep = () => {
    setLoading(true)
    setModal({
      image: 'SUCCESS',
      visible: true,
      title: '$completelyTitleModal',
      subTitle: '$resetPasswordCompletelySubTitle',
      onPress: () => {
        navigation.navigate('LoginScreen', {
          id: namesScreen.LoginScreen
        } as never)
        setModal({visible: false})
        resetStep()
      },
      onPressText: '$welcomeGotoFristPage'
    })
  }

  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader
        headerTitle="$enterNewPassword"
        subHeader="$createYourPasswordForSignIn"
      />
      {formForgetPassword.map(item => (
        <View key={item.id} style={[signUpFormStyles.inputContainer]}>
          <InputAwesome
            iconLeft={item.image}
            placeholder={item.placeholder}
            value={item.value}
            onChangeText={item.onChange}
            isCorrect={item.isCorrect}
            isError={item.isError}
            iconRight={item.showPassword ? Images.eyeSlash : Images.eye}
            enableSecureTextEntry={item.enableSecureTextEntry}
            onPressIconRight={item.onPressIconRight}
          />
          {item.isError && item.id === 1 && (
            <TextHealthCare style={signUpFormStyles.errorTextContainer}>
              *{item.message}
            </TextHealthCare>
          )}
        </View>
      ))}
      <View style={[signUpFormStyles.checkListContainer]}>
        <View style={[signUpFormStyles.checkContainer]}>
          {!usePasswordLetterValidation(formStep3.password).status.isCorrect ? (
            <JustImage
              source={Images.dot}
              style={signUpFormStyles.imageCheck}
              tintColor={colors.greyColorsGrey400}
            />
          ) : (
            <JustImage
              source={Images.check}
              style={signUpFormStyles.imageCheck}
              tintColor={colors.green}
            />
          )}
          <TextHealthCare>$mustHaveUpperLetterAtleastOne</TextHealthCare>
        </View>
        <View style={[signUpFormStyles.checkContainer]}>
          {!usePasswordLengthValidation(formStep3.password).status.isCorrect ? (
            <JustImage
              source={Images.dot}
              style={signUpFormStyles.imageCheck}
              tintColor={colors.greyColorsGrey400}
            />
          ) : (
            <JustImage
              source={Images.check}
              style={signUpFormStyles.imageCheck}
              tintColor={colors.green}
            />
          )}
          <TextHealthCare>$mustHaveAtleastOne</TextHealthCare>
        </View>
      </View>
      <View style={[signUpFormStyles.buttonContainer]}>
        <ButtonHealthCare
          fontSize={moderateScale(16)}
          title="$createNewPassword"
          onPress={handleNextStep}
          disabled={disableNext}
        />
      </View>
    </AnimatedView>
  )
}

export default ForgetPasswordStep3
