import {useQuery} from '@tanstack/react-query'

import {
  IResponseClinicLocation,
  IResponseClinicService,
  reqClinicLocation
} from 'types/services/clinic'

import api from 'configs/axios'

import {APIS} from 'const'

export const getClinicByLocationService = async (
  val: reqClinicLocation
): Promise<IResponseClinicLocation> => {
  return (await api.get(APIS.getClinicByLocation, {params: val})).data
}

export const getClinicServiceService = async (
  val: string
): Promise<IResponseClinicService> => {
  return (await api.get(`${APIS.getCliniService}/${val}`)).data
}

export const useClinicByLocationServiceServices = (val: reqClinicLocation) => {
  return useQuery(['clinic_by_location'], () => getClinicByLocationService(val))
}

export const useClinicServiceServices = (val: string) => {
  return useQuery(['clinic_service_service'], () =>
    getClinicServiceService(val),
    {enabled: false}
  )
}
