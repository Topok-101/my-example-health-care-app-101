import {create} from 'zustand'

import {
  IForgetPasswordForm,
  IForgetPasswordFormStep1,
  IForgetPasswordFormStep2,
  IForgetPasswordFormStep3
} from 'types/zustand'

export const useForgetPasswordStore = create<IForgetPasswordForm>()(set => ({
  formCurrentStep: 1,

  //step 1
  formStep1: {
    tabIndex: 0,
    email: '',
    phoneNumber: ''
  },

  //step 2
  formStep2: {
    pinCode: ''
  },

  //step 3
  formStep3: {
    password: '',
    confirmPassword: ''
  },

  setCurrentStep: (val: number) => {
    set({formCurrentStep: val})
  },
  resetStep: () => {
    set({formCurrentStep: 1})
  },
  setFormStep1: (form: IForgetPasswordFormStep1) => {
    set({formStep1: form})
  },

  setFormStep2: (form: IForgetPasswordFormStep2) => {
    set({formStep2: form})
  },
  setFormStep3: (form: IForgetPasswordFormStep3) => {
    set({formStep3: form})
  }
}))
