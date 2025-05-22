import Geolocation from '@react-native-community/geolocation'
import {isEmpty} from 'lodash'
import React, {FC, useEffect} from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'
import {
  useCreateAccountService,
  useRegisterUserService,
  useUpdateUserAccountService
} from 'services'

// import {useCreateAccountService, useRegisterUserService} from 'services'
import {SignUpFormProps} from 'types/features/sign-up-type'

import {useLoadingStore, useModalStore, useSignUpStore} from 'storez'

import {useGeoLoccation} from 'hooks'

import {ButtonHealthCare} from 'components/button'
import SmallInput from 'components/typography/SmallInput'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {useNavigation} from '@react-navigation/native'

import {moderateScale} from 'helper'

import {namesScreen} from 'const'

import FormHeader from './SignUpFormHeader'

const AnimatedView = Animated.createAnimatedComponent(View)

const SignUpFormStep5: FC<SignUpFormProps> = ({
  onPressDown,
  onPressUp,
  prevStep
}) => {
  const {
    formStep5,
    setFormStep5,
    formCurrentStep,
    formStep1,
    formStep2,
    resetStep
  } = useSignUpStore()
  const {setLoading} = useLoadingStore()

  const {setModal} = useModalStore()

  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  const navigation = useNavigation()

  useGeoLoccation()

  const {
    data: dataUser,
    mutate: register,
    isLoading,
    isSuccess
  } = useRegisterUserService()

  const accountMutate = useCreateAccountService()

  const upDateUserAccountMutate = useUpdateUserAccountService()

  const formSignUpBody = [
    {
      id: 0,
      label: '$height',
      onChangeText: (value: string) => handleOnChangeHeight(value),
      value:
        isEmpty(formStep5.height) || formStep5.height === 'N/A'
          ? ''
          : formStep5.height,
      isPressable: false,
      ref: null
    },
    {
      id: 1,
      label: '$weight',
      onChangeText: (value: string) => handleOnChangeWeight(value),
      value:
        isEmpty(formStep5.weight) || formStep5.weight === 'N/A'
          ? ''
          : formStep5.weight,
      isPressable: false,
      ref: null
    }
  ]

  useEffect(() => {
    setLoading(isLoading)
    if (isSuccess) {
      onCreateAccount(dataUser.insertId.toString())
    }
  }, [isLoading, isSuccess])

  const onCreateAccount = (userId: string) => {
    //Fix next time
    return accountMutate
      .mutateAsync({
        account_email: formStep1.email,
        account_password: formStep2.password
      })
      .then(data => {
        upDateUserAccountMutate
          .mutateAsync({
            idaccountuser: data.insertId.toString(),
            iduser: userId
          })
          .then(accountData => {
            if (accountData.status === 'update Success') {
              setTimeout(() => {
                handleNextStep()
              }, 1000)
            }
          })
      })
  }

  const handleSuccessAllowPermission = () => {
    setModal({
      image: 'SUCCESS',
      visible: true,
      title: '$welcomeTitleModal',
      subTitle: '$welcomeSignUpSuccessSubTitle',
      onPress: () => {
        setModal({visible: false})
        resetStep()
      },
      onPressText: '$welcomeGotoFristPage'
    })
  }

  const handleErrorAllowPermission = () => {
    resetStep()
    setModal({
      image: 'WORNG',
      visible: true,
      title: '$wrongTitleModal',
      subTitle: '$wrongSubTitleModal',
      onCancel: () => setModal({visible: false})
    })
  }

  const handleOpenAllowLocation = () => {
    Geolocation.requestAuthorization(
      handleSuccessAllowPermission,
      handleErrorAllowPermission
    )
    navigation.navigate('LoginScreen', {id: namesScreen.LoginScreen} as never)
    setModal({visible: false})
  }

  const handleAllowNextTime = () => {
    navigation.navigate('LoginScreen', {id: namesScreen.LoginScreen} as never)
    setModal({visible: false})
  }

  const handleNextStep = () => {
    setModal({
      image: 'LOCATION',
      visible: true,
      title: '$titleAllowLocation',
      subTitle: '$descAllowLocation',
      onPress: handleOpenAllowLocation,
      onPressText: '$allow',
      onCancel: handleAllowNextTime
    })
  }

  const handleOnChangeHeight = (value: string) => {
    setFormStep5({
      ...formStep5,
      height: isEmpty(value) ? 'N/A' : value
    })
  }
  const handleOnChangeWeight = (value: string) => {
    setFormStep5({
      ...formStep5,
      weight: isEmpty(value) ? 'N/A' : value
    })
  }

  const onSubmit = () => {
    register({
      user_email: formStep1.email,
      user_firstname: formStep1.firstName,
      user_surename: formStep1.lastName,
      user_tel: formStep1.lastName,
      user_password: formStep2.password
    })
  }
  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader
        headerTitle="$bodyInformation"
        subHeader="$plaseSpecifyYourInfomationBody"
      />
      {formSignUpBody.map(item => (
        <View style={signUpFormStyles.smallInputContainer} key={item.id}>
          <SmallInput
            keyboardType="number-pad"
            label={item.label}
            onChangeText={item.onChangeText}
            value={item.value}
            isPressable={item.isPressable}
            onPressDown={onPressDown}
            onPressUp={onPressUp}
            ref={item.ref}
          />
        </View>
      ))}

      <View style={[signUpFormStyles.buttonContainer]}>
        <ButtonHealthCare
          title="$register"
          onPress={onSubmit}
          fontSize={moderateScale(16)}
        />
      </View>
    </AnimatedView>
  )
}

export default SignUpFormStep5
