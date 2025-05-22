import {useQuery} from '@tanstack/react-query'

import {IResponseMember, IResponseMemberDetail} from 'types/services/member'

import api from 'configs/axios'

import {APIS} from 'const'

export const pointMemberService = async (): Promise<IResponseMember> => {
  return (await api.get(APIS.getPointMember)).data
}

export const pointMemberDetailServices =
  async (): Promise<IResponseMemberDetail> => {
    return (await api.get(APIS.getMemberDetail)).data
  }

export const usePointMemberServices = () => {
  return useQuery(['getPointMember'], pointMemberService)
}

export const usePointMemberDetailServices = () => {
  return useQuery(['getPointMemberDetail'], pointMemberDetailServices)
}
