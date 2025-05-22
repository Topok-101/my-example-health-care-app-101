import {useQuery} from '@tanstack/react-query'

import api from 'configs/axios'

import {APIS} from 'const'
import { IResponseDoctorHome } from 'types/services/services-home'

export const servicesHomeService = async (): Promise<IResponseDoctorHome> => {
  return (await api.get(APIS.getServicesHome)).data
}

export const useServicesHomerServices = () => {
  return useQuery(['services_home'], servicesHomeService)
}
