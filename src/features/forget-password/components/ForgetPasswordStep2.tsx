import {isEmpty} from 'lodash'
import React, {FC, useEffect, useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import BackgroundTimer from 'react-native-background-timer'
import Animated from 'react-native-reanimated'

import {SignUpFormProps} from 'types/features/sign-up-type'
import {IValidNPN} from 'types/hooks'

import {useForgetPasswordStore} from 'storez'

import {TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import PinComponent from './PinComponent'

const AnimatedView = Animated.createAnimatedComponent(View)

const PIN_LENGTH = 4

const ForgetPasswordStep2: FC<SignUpFormProps> = ({
  prevStep = 0,
  onChangeStep
}) => {
  const [statusPin, setStatusPin] = useState<IValidNPN | null>()
  const [otpCounter, setOtpCounter] = useState(0)
  const {formCurrentStep, formStep1, formStep2, resetStep, setFormStep2} =
    useForgetPasswordStore()
  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  useEffect(() => {
    onStartOTPCount()

    return BackgroundTimer.stopBackgroundTimer()
  }, [])
  useEffect(() => {
    if (otpCounter > 30) {
      BackgroundTimer.stopBackgroundTimer()
    }

    // return BackgroundTimer.stopBackgroundTimer()
  }, [otpCounter])

  const onStartOTPCount = () => {
    setOtpCounter(0)

    BackgroundTimer.runBackgroundTimer(() => {
      setOtpCounter(prevCount => (prevCount += 1)) //code that will be called every 3 seconds
    }, 1000)
  }
  const handleValidatingPinCode = (pin: string): IValidNPN => {
    if (isEmpty(pin) || pin.length < PIN_LENGTH) {
      return {
        message: 'Please enter your pin code',
        status: {isError: true, isCorrect: false}
      }
    } else {
      return {
        message: 'Success',
        status: {isError: false, isCorrect: true}
      }
    }
  }

  const handleChangePin = (value: string) => {
    setStatusPin(null)
    setFormStep2({
      pinCode: value
    })
  }

  const handleNextStep = () => {
    const validate = handleValidatingPinCode(formStep2.pinCode)
    setStatusPin(validate)
    if (validate.status.isCorrect) {
      resetStep()
      onChangeStep(3)
    }
  }

  const customSubHeader = (
    <TextHealthCare
      style={{fontSize: moderateScale(16), color: colors.greyColorsGrey400}}>
      {`$specifyIdentityThatWeSentToPhoneOrEmail\n`}
      <TextHealthCare style={{fontSize: moderateScale(16), color: colors.black}}>
        {formStep1.phoneNumber}
      </TextHealthCare>
    </TextHealthCare>
  )
  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader
        headerTitle="$specifyIdentityPin"
        customSubheader={customSubHeader}
      />
      <View style={[signUpFormStyles.inputContainer]}>
        <PinComponent
          pinLength={PIN_LENGTH}
          onChangePin={handleChangePin}
          status={statusPin}
        />
      </View>

      <View style={[signUpFormStyles.buttonContainer]}>
        <ButtonHealthCare
          title="$confirm"
          onPress={handleNextStep}
          fontSize={moderateScale(16)}
        />
      </View>

      {otpCounter < 30 ? (
        <View style={[signUpFormStyles.textFooterContainer]}>
          <TextHealthCare textType="semibold" style={{color: colors.blue600}}>
            {otpCounter} $seccond
          </TextHealthCare>
        </View>
      ) : (
        <View style={[signUpFormStyles.textFooterContainer]}>
          <TextHealthCare>$cannotGetPinCode </TextHealthCare>
          <TouchableOpacity
            style={{paddingLeft: 4}}
            activeOpacity={0.5}
            onPress={onStartOTPCount}>
            <TextHealthCare textType="semibold" style={{color: colors.blue600}}>
              $sentAgain
            </TextHealthCare>
          </TouchableOpacity>
        </View>
      )}
    </AnimatedView>
  )
}

export default ForgetPasswordStep2
