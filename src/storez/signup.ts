import {create} from 'zustand'

import {
  ISignUpForm,
  ISignUpFormStep1,
  ISignUpFormStep2,
  ISignUpFormStep3,
  ISignUpFormStep4,
  ISignUpFormStep5
} from 'types/zustand'

export const useSignUpStore = create<ISignUpForm>()(set => ({
  formCurrentStep: 1,
  //step 1
  formStep1: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAgree: false
  },
  //step 2
  formStep2: {
    password: '',
    confirmPassword: ''
  },
  //step3
  formStep3: {
    gender: undefined
  },
  //step4
  formStep4: {
    yearOfBirth: ''
  },
  //step5
  formStep5: {
    height: '',
    weight: '',
    bloodType: undefined
  },

  setCurrentStep: (val: number) => {
    set({formCurrentStep: val})
  },
  resetStep: () => {
    set({formCurrentStep: 1})
  },

  setFormStep1: (form: ISignUpFormStep1) => {
    set({formStep1: form})
  },

  setFormStep2: (form: ISignUpFormStep2) => {
    set({formStep2: form})
  },

  setFormStep3: (form: ISignUpFormStep3) => {
    set({formStep3: form})
  },

  setFormStep4: (form: ISignUpFormStep4) => {
    set({formStep4: form})
  },

  setFormStep5: (form: ISignUpFormStep5) => {
    set({formStep5: form})
  }
}))
