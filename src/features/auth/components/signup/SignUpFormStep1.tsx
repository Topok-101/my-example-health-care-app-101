import React, {FC, useEffect, useState} from 'react'
import {KeyboardTypeOptions, TouchableOpacity, View} from 'react-native'
import Animated from 'react-native-reanimated'
import {useCheckUserEmailService} from 'services'

import {SignUpFormProps} from 'types/features/sign-up-type'
import {IValidNPN} from 'types/hooks'

import {useLoadingStore, useSignUpStore} from 'storez'

import {
  validateEmail,
  validateMinLength,
  validatePhone
} from 'hooks/use-validation'

import {InputAwesome, TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'
import CheckboxHealthCare from 'components/checkbox/CheckboxHealthCare'

import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import Images from 'assets/image/icons'

import {namesScreen} from 'const'

import FormHeader from './SignUpFormHeader'

const AnimatedView = Animated.createAnimatedComponent(View)

const customLabel = (
  <View style={[signUpFormStyles.termAndAgreeContainer]}>
    <TextHealthCare>
      $iAgree
      <TextHealthCare style={{color: colors.blue600}}>$conditions</TextHealthCare>
      <TextHealthCare>$and</TextHealthCare>
      <TextHealthCare style={{color: colors.blue600}}>$policy</TextHealthCare>
      <TextHealthCare>$from</TextHealthCare>
      <TextHealthCare>$HealthCare</TextHealthCare>
    </TextHealthCare>
  </View>
)

const SignUpFormStep1: FC<SignUpFormProps> = ({onChangeStep, prevStep = 0}) => {
  const navigation = useNavigation()
  const {setLoading} = useLoadingStore()
  const {setFormStep1, formStep1, formCurrentStep} = useSignUpStore()
  const [statusFirstName, setStatusFirstName] = useState<IValidNPN>()
  const [statusLastName, setStatusLastName] = useState<IValidNPN>()
  const [statusPhoneNumber, setStatusPhoneNumber] = useState<IValidNPN>()
  const [statusEmail, setStatusEmail] = useState<IValidNPN>()
  const [disableNext, setDisableNext] = useState(true)

  const {
    data: dataEmail,
    mutate: checkEmail,
    isLoading,
    isSuccess
  } = useCheckUserEmailService()

  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  useEffect(() => {
    if (isSuccess) {
      onCheckStatus()
    }
  }, [isSuccess])

  useEffect(() => {
    const validateFirstName = validateMinLength(formStep1.firstName, 1)
    const validateLastName = validateMinLength(formStep1.lastName, 1)
    const validatePhoneNumber = validatePhone(formStep1.phone)
    const validateEmailAddress = validateEmail(formStep1.email)
    if (
      validateFirstName?.status.isCorrect &&
      validateLastName?.status.isCorrect &&
      validatePhoneNumber?.status.isCorrect &&
      validateEmailAddress?.status.isCorrect &&
      formStep1.isAgree
    ) {
      setDisableNext(false)
    } else {
      setDisableNext(true)
    }
  }, [formStep1])

  const formSignUp = [
    {
      id: 0,
      placeholder: 'firstNamePlaceholder',
      image: Images.userOutline,
      value: formStep1.firstName,
      onChange: (value: string) => handleChangeFirstName(value),
      isError: statusFirstName?.status.isError,
      isCorrect: statusFirstName?.status.isCorrect,
      message: statusFirstName?.message,
      keyboardType: 'default'
    },
    {
      id: 1,
      placeholder: 'lastNamePlaceholder',
      image: Images.userOutline,
      value: formStep1.lastName,
      onChange: (value: string) => handleChangeLastName(value),
      isError: statusLastName?.status.isError,
      isCorrect: statusLastName?.status.isCorrect,
      message: statusLastName?.message,
      keyboardType: 'default'
    },
    {
      id: 2,
      placeholder: 'phonePlaceholder',
      image: Images.phone,
      value: formStep1.phone,
      onChange: (value: string) => handleChangePhoneNumber(value),
      isError: statusPhoneNumber?.status.isError,
      isCorrect: statusPhoneNumber?.status.isCorrect,
      message: statusPhoneNumber?.message,
      keyboardType: 'number-pad'
    },
    {
      id: 3,
      placeholder: 'emailPlaceholder',
      image: Images.email,
      value: formStep1.email,
      onChange: (value: string) => handleChangeEmail(value),
      isError: statusEmail?.status.isError,
      isCorrect: statusEmail?.status.isCorrect,
      message: statusEmail?.message,
      keyboardType: 'default'
    }
  ]

  const onCheckStatus = () => {
    if (dataEmail?.status === 'Email not found') {
      handleNextStep()
    } else {
      setStatusEmail({
        status: {
          isCorrect: false,
          isError: true
        },
        message: dataEmail?.status
      })
    }
  }
  const handleChangeFirstName = (value: string) => {
    const validate = validateMinLength(value, 1)
    setStatusFirstName(validate)
    setFormStep1({
      ...formStep1,
      firstName: value
    })
  }

  const handleChangeLastName = (value: string) => {
    const validate = validateMinLength(value, 1)
    setStatusLastName(validate)
    setFormStep1({
      ...formStep1,
      lastName: value
    })
  }

  const handleChangePhoneNumber = (value: string) => {
    const validate = validatePhone(value)
    setStatusPhoneNumber(validate)
    // setPhoneNumberFormat(formatPhone.format)
    setFormStep1({
      ...formStep1,
      phone: value
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

  const handleChangeIsAgree = (value: boolean) => {
    setFormStep1({
      ...formStep1,
      isAgree: value
    })
  }

  const handleNextStep = async () => {
    onChangeStep(2)
  }

  const onCheckEmail = () => {
    checkEmail({user_email: formStep1.email})
  }
  return (
    <AnimatedView entering={entering} exiting={exiting}>
      <FormHeader
        headerTitle="$signUpNewFeature"
        subHeader="$plaseSpecifyYourTruthInformation"
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
            keyboardType={item.keyboardType as KeyboardTypeOptions}
          />
          {item.isError && (
            <TextHealthCare style={signUpFormStyles.errorTextContainer}>
              *{item.message}
            </TextHealthCare>
          )}
        </View>
      ))}

      <View style={[signUpFormStyles.inputContainer]}>
        <CheckboxHealthCare
          // boxType="square"
          customLabel={customLabel}
          value={formStep1.isAgree}
          onValueChange={handleChangeIsAgree}
        />
      </View>
      <View style={[signUpFormStyles.buttonContainer]}>
        <ButtonHealthCare
          fontSize={moderateScale(16)}
          title="$next"
          onPress={onCheckEmail}
          disabled={disableNext}
        />
      </View>

      <View style={[signUpFormStyles.textFooterContainer]}>
        <TextHealthCare>$haveExistingUser </TextHealthCare>
        <TouchableOpacity
          style={{paddingLeft: 4}}
          activeOpacity={0.5}
          onPress={() => navigation.navigate(namesScreen.LoginScreen as never)}>
          <TextHealthCare textType="semibold" style={{color: colors.blue500}}>
            $signUpHere
          </TextHealthCare>
        </TouchableOpacity>
      </View>
    </AnimatedView>
  )
}

export default SignUpFormStep1
