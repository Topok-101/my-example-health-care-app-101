import React, {FC, useEffect, useRef} from 'react'
import {TouchableOpacity, View} from 'react-native'

import {useSignUpStore} from 'storez'

import {useHandleAndroidBackPress} from 'hooks/use-handle-android-back-press'

import {ClassicHeader, ScrollViewAware, TextHealthCare} from 'components'
import {HeaderBackLeft} from 'components/header/items'
import HeaderTitleNumber from 'components/header/items/HeaderTitleNumber'

import {colors} from 'configs/theme'

import SignUpFormStep1 from './components/signup/SignUpFormStep1'
import SignUpFormStep2 from './components/signup/SignUpFormStep2'
import SignUpFormStep3 from './components/signup/SignUpFormStep3'
import SignUpFormStep4 from './components/signup/SignUpFormStep4'
import SignUpFormStep5 from './components/signup/SignUpFormStep5'
import {loginStyles} from './style'
import {signUpFormStyles} from './style/signup.style'

const SignUpScreen: FC = () => {
  const {formCurrentStep, setCurrentStep, resetStep} = useSignUpStore()
  const previousStep = useRef<number>(0)

  const handleBack = () => {
    if (formCurrentStep > 1) {
      setCurrentStep(formCurrentStep - 1)
    } else {
      resetStep()
    }
    return true
  }

  useHandleAndroidBackPress(handleBack)

  useEffect(() => {
    previousStep.current = formCurrentStep
  }, [formCurrentStep])

  return (
    <ScrollViewAware style={loginStyles.containerFlatlist}>
      <ClassicHeader
        headerLeft={
          <HeaderBackLeft
            onPress={handleBack}
            canGobackStep={formCurrentStep === 1}
          />
        }
        headerTitle={
          <HeaderTitleNumber currentPage={formCurrentStep} totalPage={5} />
        }
        headerRight={
          formCurrentStep > 3 &&
          formCurrentStep < 5 && (
            <TouchableOpacity
              onPress={() => setCurrentStep(formCurrentStep + 1)}>
              <TextHealthCare style={{color: colors.greyColorsGrey400}}>
                ข้าม
              </TextHealthCare>
            </TouchableOpacity>
          )
        }
      />

      <View style={[signUpFormStyles.signUpContainer]}>
        {formCurrentStep === 1 && (
          <SignUpFormStep1
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 2 && (
          <SignUpFormStep2
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 3 && (
          <SignUpFormStep3
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 4 && (
          <SignUpFormStep4
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 5 && (
          <SignUpFormStep5
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
      </View>
    </ScrollViewAware>
  )
}

export default SignUpScreen
