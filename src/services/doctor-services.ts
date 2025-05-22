import {useQuery} from '@tanstack/react-query'

import {IResponseDoctor} from 'types/services/doctor'

import api from 'configs/axios'

import {APIS} from 'const'

export const doctorService = async (): Promise<IResponseDoctor> => {
    return (await api.get(APIS.getDoctor)).data
}

export const useDoctorServices = () => {
  return useQuery(['doctor'], doctorService)
}
