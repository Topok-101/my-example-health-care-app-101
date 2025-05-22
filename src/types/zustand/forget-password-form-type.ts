export type IForgetPasswordFormStep1 = {
  tabIndex?: number
  email?: string
  phoneNumber?: string
}

export type IForgetPasswordFormStep2 = {
  pinCode: string
}

export type IForgetPasswordFormStep3 = {
  password: string
  confirmPassword: string
}

export type IForgetPasswordForm = {
  formCurrentStep: number

  //step1
  formStep1: IForgetPasswordFormStep1

  //step2
  formStep2: IForgetPasswordFormStep2

  //step3
  formStep3: IForgetPasswordFormStep3

  setCurrentStep: (val: number) => void
  resetStep: () => void
  setFormStep1: (form: IForgetPasswordFormStep1) => void
  setFormStep2: (form: IForgetPasswordFormStep2) => void
  setFormStep3: (form: IForgetPasswordFormStep3) => void
}
