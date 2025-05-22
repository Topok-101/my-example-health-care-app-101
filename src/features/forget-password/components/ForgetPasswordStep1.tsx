import React, {Children, FC, useEffect, useRef, useState} from 'react'
import {Text, View} from 'react-native'
import Animated from 'react-native-reanimated'

import {SignUpFormProps} from 'types/features/sign-up-type'
import {IValidNPN} from 'types/hooks'

import {useForgetPasswordStore} from 'storez'

import {validateEmail, validatePhone} from 'hooks/use-validation'

import {InputAwesome} from 'components'
import {ButtonHealthCare} from 'components/button'
import TabBar from 'components/tab-bar/TabBar'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {colors} from 'configs/theme'

import {mapRawText, moderateScale} from 'helper'

import Images from 'assets/image/icons'

const AnimatedView = Animated.createAnimatedComponent(View)
const AnimatedTabView = Animated.createAnimatedComponent(View)

const ForgetPasswordStep1: FC<SignUpFormProps> = ({
  prevStep = 0,
  onChangeStep
}) => {
  const {formCurrentStep, formStep1, resetStep, setFormStep1} =
    useForgetPasswordStore()

  // const [disableNext, setDisableNext] = useState(true)
  const [statusEmail, setStatusEmail] = useState<IValidNPN | null>()
  const [statusPhoneNumber, setStatusPhoneNumber] = useState<IValidNPN | null>()

  const prevTabStep = useRef<number>(0)

  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  const animateTab = animatedChangeSignUpStep(
    prevTabStep.current,
    formStep1.tabIndex || 0
  )

  useEffect(() => {
    prevTabStep.current = formStep1.tabIndex || 0
  }, [formStep1.tabIndex])

  // useEffect(() => {
  //   if (statusEmail?.status.isCorrect || statusPhoneNumber?.status.isCorrect) {
  //     setDisableNext(false)
  //   } else {
  //     setDisableNext(true)
  //   }
  // }, [statusEmail, statusPhoneNumber])

  const handleOnChangeTab = (index: number) => {
    setStatusEmail(null)
    setStatusPhoneNumber(null)

    resetStep()
    setFormStep1({
      tabIndex: index
    })
  }

  const handleChangeEmail = (value: string) => {
    const validate = validateEmail(value)
    setStatusEmail(validate)

    setFormStep1({
      ...formStep1,
      email: value
    })
  }

  const handleChangePhoneNumber = (value: string) => {
    const validate = validatePhone(value)
    setStatusPhoneNumber(validate)

    setFormStep1({
      ...formStep1,
      phoneNumber: value
    })
  }

  const handleNextStep = () => {
    if (formStep1.tabIndex === 0) {
      const validate = validateEmail(formStep1.email || '')
      setStatusEmail(validate)
      if (!validate.status.isError) {
        onChangeStep(2)
      }
      // if (!validate.status.isError) {
      //   setLoading({loading: true})
      //   setModal({
      //     image: 'LOCATION',
      //     visible: true,
      //     title: '$completelyTitleModal',
      //     subTitle: '$resetPasswordCompletelySubTitle',
      //     onPress: () => {
      //       navigation.navigate(
      //         namesScreen.LoginScreen as never,
      //         {id: namesScreen.LoginScreen} as never
      //       )
      //       closeModal()
      //     },
      //     onPressText: '$welcomeGotoFristPage'
      //   })
      // }
    } else if (formStep1.tabIndex === 1) {
      const validate = validatePhone(formStep1.phoneNumber || '')
      setStatusPhoneNumber(validate)

      if (!validate.status.isError) {
        onChangeStep(2)
      }
    }
  }

  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader
        headerTitle="$forgetPassword"
        subHeader="$plaseSpecifyYourEmailOrPassword"
      />
      <View style={[signUpFormStyles.inputContainer]}>
        <TabBar
          data={['$email', '$telephoneNumber']}
          onChangeTab={handleOnChangeTab}
          value={formStep1.tabIndex}
          activeBackgroudColor={colors.blue600}
          activeTextColor={colors.white}
        />
      </View>
      <AnimatedView entering={entering} exiting={exiting}>
        {formStep1.tabIndex === 0 && (
          <AnimatedTabView
            entering={animateTab.entering}
            exiting={animateTab.exiting}
            style={[signUpFormStyles.inputContainer]}>
            <InputAwesome
              iconLeft={Images.email}
              placeholder={'emailPlaceholder'}
              value={formStep1.email}
              onChangeText={handleChangeEmail}
              isCorrect={statusEmail?.status.isCorrect}
              isError={statusEmail?.status.isError}
              // keyboardType={item.keyboardType as KeyboardTypeOptions}
            />
            {statusEmail?.status.isError && (
              <Text style={signUpFormStyles.errorTextContainer}>
                *{mapRawText(Children.toArray(statusEmail.message))}
              </Text>
            )}
          </AnimatedTabView>
        )}
        {formStep1.tabIndex === 1 && (
          <AnimatedTabView
            entering={animateTab.entering}
            exiting={animateTab.exiting}
            style={[signUpFormStyles.inputContainer]}>
            <InputAwesome
              iconLeft={Images.phone}
              placeholder={'phonePlaceholder'}
              value={formStep1.phoneNumber}
              onChangeText={handleChangePhoneNumber}
              isCorrect={statusPhoneNumber?.status.isCorrect}
              isError={statusPhoneNumber?.status.isError}
              keyboardType={'number-pad'}
            />
            {statusPhoneNumber?.status.isError && (
              <Text style={signUpFormStyles.errorTextContainer}>
                *{statusPhoneNumber.message}
              </Text>
            )}
          </AnimatedTabView>
        )}
      </AnimatedView>
      <View style={[signUpFormStyles.buttonContainer]}>
        <ButtonHealthCare
          fontSize={moderateScale(16)}
          title="$resetPassword"
          onPress={handleNextStep}
          disabled={
            statusEmail?.status.isError || statusPhoneNumber?.status.isError
          }
        />
      </View>
    </AnimatedView>
  )
}

export default ForgetPasswordStep1
