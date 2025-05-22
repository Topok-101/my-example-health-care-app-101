import {IGenderType} from 'types/features/select-gender-type'

export type IBloodType =
  | ''
  | 'A-'
  | 'A+'
  | 'B-'
  | 'B+'
  | 'O-'
  | 'O+'
  | 'AB-'
  | 'AB+'
  | 'N/A'
export type ISignUpFormStep1 = {
  firstName: string
  lastName: string
  phone: string
  email: string
  isAgree: boolean
}

export type ISignUpFormStep2 = {
  password: string
  confirmPassword: string
}

export type ISignUpFormStep3 = {
  gender?: IGenderType
}
export type ISignUpFormStep4 = {
  yearOfBirth: string
}
export type ISignUpFormStep5 = {
  height: string
  weight: string
  bloodType?: IBloodType
}
export type ISignUpForm = {
  formCurrentStep: number

  //step1
  formStep1: ISignUpFormStep1

  //step2
  formStep2: ISignUpFormStep2

  //step3
  formStep3: ISignUpFormStep3

  //step4
  formStep4: ISignUpFormStep4

  //step5
  formStep5: ISignUpFormStep5

  setCurrentStep: (val: number) => void
  resetStep: () => void
  setFormStep1: (form: ISignUpFormStep1) => void
  setFormStep2: (form: ISignUpFormStep2) => void
  setFormStep3: (form: ISignUpFormStep3) => void
  setFormStep4: (form: ISignUpFormStep4) => void
  setFormStep5: (form: ISignUpFormStep5) => void
}
