import {IClinicDetailCard, IDoctorCard} from 'types/components'
import {ICheckBoxGroupValue} from 'types/components/check-box-type'

export type IAppointmentFor = 'own' | 'other'
export enum IServiceType {
  Chat,
  Clinic,
  Home
}
export type IMakeAppointmentFormStep1 = {
  makeAppointFor: IAppointmentFor
  isAgree: boolean
}

export type IMakeAppointmentFormStep2 = {
  name: string
  telephone: string
}

export type IMakeAppointmentFormStep3 = {
  appointmentDate: string
}
export type IMakeAppointmentFormStep4 = {
  services: ICheckBoxGroupValue[]
  serviceType?: ICheckBoxGroupValue
}
export type IMakeAppointmentFormStep5 = {
  clinic?: IClinicDetailCard
  doctor?: IDoctorCard
}
export type IMakeAppointmentFormStep6 = {
  preparation: string
}
export type IMakeAppointmentForm = {
  formCurrentStep: number

  //step1
  formStep1: IMakeAppointmentFormStep1

  //step2
  formStep2: IMakeAppointmentFormStep2

  //step3
  formStep3: IMakeAppointmentFormStep3

  //step4
  formStep4: IMakeAppointmentFormStep4

  //step5
  formStep5: IMakeAppointmentFormStep5

  //step5
  formStep6: IMakeAppointmentFormStep6

  setCurrentStep: (val: number) => void
  resetStep: () => void
  setFormStep1: (form: IMakeAppointmentFormStep1) => void
  setFormStep2: (form: IMakeAppointmentFormStep2) => void
  setFormStep3: (form: IMakeAppointmentFormStep3) => void
  setFormStep4: (form: IMakeAppointmentFormStep4) => void
  setFormStep5: (form: IMakeAppointmentFormStep5) => void
  setFormStep6: (form: IMakeAppointmentFormStep6) => void
}
