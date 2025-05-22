import {create} from 'zustand'

import {
  IMakeAppointmentForm,
  IMakeAppointmentFormStep1,
  IMakeAppointmentFormStep2,
  IMakeAppointmentFormStep3,
  IMakeAppointmentFormStep4,
  IMakeAppointmentFormStep5,
  IMakeAppointmentFormStep6
} from 'types/zustand'

export const useAppointmentStore = create<IMakeAppointmentForm>()(set => ({
  formCurrentStep: 1,

  //step 1
  formStep1: {
    makeAppointFor: 'other',
    isAgree: false
  },

  //step 2
  formStep2: {
    name: '',
    telephone: ''
  },

  //step3

  formStep3: {
    appointmentDate: ''
  },

  //step4
  formStep4: {
    services: [],
    serviceType: undefined
  },

  //step5
  formStep5: {
    clinicId: 0
  },
  //step6
  formStep6: {
    preparation: 'งดทานน้ำและอาหารก่อนเข้ารับการตรวจ 12 ชั่วโมง'
  },

  setCurrentStep: (val: number) => {
    set({formCurrentStep: val})
  },

  resetStep: () => {
    set({
      formCurrentStep: 1,
      formStep1: {isAgree: false, makeAppointFor: 'other'},
      formStep2: {name: '', telephone: ''},
      formStep3: {appointmentDate: ''},
      formStep4: {services: [],serviceType: undefined},
      formStep5: {},
      formStep6: {preparation: ''}
    })
  },

  setFormStep1: (form: IMakeAppointmentFormStep1) => {
    set({formStep1: form})
  },

  setFormStep2: (form: IMakeAppointmentFormStep2) => {
    set({formStep2: form})
  },

  setFormStep3: (form: IMakeAppointmentFormStep3) => {
    set({formStep3: form})
  },

  setFormStep4: (form: IMakeAppointmentFormStep4) => {
    set({formStep4: form})
  },

  setFormStep5: (form: IMakeAppointmentFormStep5) => {
    set({formStep5: form})
  },

  setFormStep6: (form: IMakeAppointmentFormStep6) => {
    set({formStep6: form})
  }
}))
