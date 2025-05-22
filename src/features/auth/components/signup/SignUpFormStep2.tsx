import {isEmpty} from 'lodash'
import React, {FC, useEffect, useState} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'

import {SignUpFormProps} from 'types/features/sign-up-type'
import {IValidNPN} from 'types/hooks'

import {useSignUpStore} from 'storez'

import {
  usePasswordLengthValidation,
  usePasswordLetterValidation,
  usePasswordValidation,
  useValidateComparePassword
} from 'hooks/use-validation'

import {InputAwesome, JustImage, TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import Images from 'assets/image/icons'

import FormHeader from './SignUpFormHeader'

const AnimatedView = Animated.createAnimatedComponent(View)
const SignUpFormStep2: FC<SignUpFormProps> = ({onChangeStep, prevStep = 0}) => {
  const {formStep2, setFormStep2, formCurrentStep} = useSignUpStore()
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
    const validatePassword = usePasswordValidation(formStep2.password)
    const validateComparePassword = useValidateComparePassword(
      formStep2.password,
      formStep2.confirmPassword
    )
    if (
      validatePassword?.status.isCorrect &&
      validateComparePassword?.status.isCorrect
    ) {
      setDisableNext(false)
    } else {
      setDisableNext(true)
    }
  }, [formStep2])

  const formSignUp = [
    {
      id: 0,
      placeholder: 'passwordPlaceholder',
      image: Images.password,
      value: formStep2.password,
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
      value: formStep2.confirmPassword,
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

    if (!isEmpty(formStep2.confirmPassword)) {
      const validateConfirm = useValidateComparePassword(
        value,
        formStep2.confirmPassword
      )
      setStatusConfirmPassword(validateConfirm)
    }

    setStatusPassword(validate)
    setFormStep2({
      ...formStep2,
      password: value
    })
  }
  const handleChangeConfirmPassword = (value: string) => {
    const validate = useValidateComparePassword(formStep2.password, value)
    setStatusConfirmPassword(validate)
    setFormStep2({
      ...formStep2,
      confirmPassword: value
    })
    // setConfirmPassword(value)
  }

  const handleNextStep = () => {
    onChangeStep(3)
  }

  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader
        headerTitle="$inputPassword"
        subHeader="$createYourPassword"
      />
      {formSignUp.map(item => (
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
          {!usePasswordLetterValidation(formStep2.password).status.isCorrect ? (
            <JustImage
              source={Images.dot}
              style={signUpFormStyles.imageCheck}
              tintColor={'#A0A8B0'}
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
          {!usePasswordLengthValidation(formStep2.password).status.isCorrect ? (
            <JustImage
              source={Images.dot}
              style={signUpFormStyles.imageCheck}
              tintColor={'#A0A8B0'}
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
          title="$next"
          onPress={handleNextStep}
          disabled={disableNext}
        />
      </View>
    </AnimatedView>
  )
}

export default SignUpFormStep2
