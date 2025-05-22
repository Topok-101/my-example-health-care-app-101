import {useQuery} from '@tanstack/react-query'

import {IResponseGetAppointment} from 'types/services/appointment'

import api from 'configs/axios'

import {APIS} from 'const'

export const getAppointmentService =
  async (): Promise<IResponseGetAppointment> => {
    return (await api.get(APIS.getAppointment)).data
  }

export const useAppointmentServiceServices = () => {
  return useQuery(['appointment_upcomming_date'], getAppointmentService)
}
