import {useMutation} from '@tanstack/react-query'
import {env} from 'configs'

import {
  DataTypeAuth,
  IRequestAuthEmail,
  IResponseAuth,
  TokenRefresh
} from 'types/services/auth'

import api from 'configs/axios'

import {APIS} from 'const'

export const authenticationService = async (
  item: IRequestAuthEmail
): Promise<IResponseAuth> => {
  const {data} = await api.post(APIS.login, {
    account_email: item.account_email,
    account_password: item.account_password
  })
  return data
}

export const refreshTokenService = async (
  item: DataTypeAuth
): Promise<{data: TokenRefresh}> => {
  const data = await fetch(env.API_ENDPOINT + APIS.refreshToken, {
    method: 'post',
    headers: {['Authorization']: 'Bearer ' + item.refreshToken}
  })

  return data.json()
}

export const useAuthenticationService = () => {
  return useMutation((data: IRequestAuthEmail) => authenticationService(data))
}
