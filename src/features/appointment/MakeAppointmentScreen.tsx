import React, {FC, useEffect, useRef} from 'react'
import {TouchableOpacity, View} from 'react-native'

import {useAppointmentStore} from 'storez'

import {useDismissModalScreen} from 'hooks'
import {useHandleAndroidBackPress} from 'hooks/use-handle-android-back-press'

import {ClassicHeader, JustImage} from 'components'
import {HeaderBackLeft} from 'components/header/items'
import HeaderTitleNumber from 'components/header/items/HeaderTitleNumber'

import {loginStyles} from 'features/auth/style'

import {useNavigation} from '@react-navigation/native'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'

import {names} from 'constants/name-screen'

import {
  MakeAppointmentFormStep1,
  MakeAppointmentFormStep2,
  MakeAppointmentFormStep3,
  MakeAppointmentFormStep4,
  MakeAppointmentFormStep5,
  MakeAppointmentFormStep6
} from './components/makeAppointmentScreen'

const MakeAppointmentScreen: FC = () => {
  const navigation = useNavigation()
  const {formCurrentStep, setCurrentStep, resetStep, formStep4} =
    useAppointmentStore()
  const previousStep = useRef<number>(0)

  const handleBack = () => {
    const step =
      formStep4.serviceType?.id === 2 && formCurrentStep === 6 ? 2 : 1

    if (formCurrentStep > 1) {
      setCurrentStep(formCurrentStep - step)
    } else {
      navigation.goBack()
      resetStep()
    }

    return true
  }

  useDismissModalScreen(resetStep)
  useHandleAndroidBackPress(handleBack)

  useEffect(() => {
    previousStep.current = formCurrentStep
  }, [formCurrentStep])

  const handleCloseForm = () => {
    resetStep()
    navigation.navigate(names.HomeScreen as never)
  }

  return (
    <View style={loginStyles.containerFlatlist}>
      <ClassicHeader
        headerLeft={
          <HeaderBackLeft onPress={handleBack} canGobackStep={false} />
        }
        headerTitle={
          <HeaderTitleNumber currentPage={formCurrentStep} totalPage={6} />
        }
        headerRight={
          <TouchableOpacity onPress={handleCloseForm}>
            <JustImage
              source={Images.close}
              style={{width: horizontalScale(24), height: verticalScale(24)}}
            />
          </TouchableOpacity>
        }
      />

      <View style={[loginStyles.containerFlatlist]}>
        {formCurrentStep === 1 && (
          <MakeAppointmentFormStep1
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 2 && (
          <MakeAppointmentFormStep2
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 3 && (
          <MakeAppointmentFormStep3
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 4 && (
          <MakeAppointmentFormStep4
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 5 && (
          <MakeAppointmentFormStep5
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
        {formCurrentStep === 6 && (
          <MakeAppointmentFormStep6
            onChangeStep={setCurrentStep}
            prevStep={previousStep.current}
          />
        )}
      </View>
    </View>
  )
}

export default MakeAppointmentScreen
