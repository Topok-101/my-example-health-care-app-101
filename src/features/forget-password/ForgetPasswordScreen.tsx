import React, {useEffect, useRef} from 'react'
import {View} from 'react-native'

import {useForgetPasswordStore} from 'storez'

import {ClassicHeader, ScrollViewAware} from 'components'
import {HeaderBackLeft} from 'components/header/items'

import {loginStyles} from 'features/auth/style'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {
  ForgetPasswordStep1,
  ForgetPasswordStep2,
  ForgetPasswordStep3
} from './components'

const ForgetPasswordScreen = () => {
  const {formCurrentStep, setCurrentStep, resetStep} = useForgetPasswordStore()
  const previousStep = useRef<number>(0)

  // const navigation = useNavigation()
  useEffect(() => {
    previousStep.current = formCurrentStep
  }, [formCurrentStep])

  const handleBack = () => {
    if (formCurrentStep > 1) {
      setCurrentStep(formCurrentStep - 1)
    } else {
      // navigation && navigation.canGoBack() && navigation.goBack()
      resetStep()
    }
    return true
  }
  // useHandleAndroidBackPress(handleBack)

  // const handleOnChangeTab = (index: number) => {
  //   setTabValue(index)

  // }

  // const handleOnChangePin = (value: string) => {
  //   console.log({value})
  // }
  return (
    <ScrollViewAware style={loginStyles.containerFlatlist}>
      <ClassicHeader
        headerLeft={
          <HeaderBackLeft
            onPress={handleBack}
            canGobackStep={formCurrentStep === 1}
          />
        }
      />
      <View style={[signUpFormStyles.signUpContainer]}>
        {formCurrentStep === 1 && (
          <ForgetPasswordStep1
            prevStep={previousStep.current}
            onChangeStep={setCurrentStep}
          />
        )}
        {formCurrentStep === 2 && (
          <ForgetPasswordStep2
            prevStep={previousStep.current}
            onChangeStep={setCurrentStep}
          />
        )}
        {formCurrentStep === 3 && (
          <ForgetPasswordStep3
            prevStep={previousStep.current}
            onChangeStep={setCurrentStep}
          />
        )}
      </View>
    </ScrollViewAware>
  )
}

export default ForgetPasswordScreen
