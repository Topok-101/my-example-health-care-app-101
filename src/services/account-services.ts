import {useMutation} from '@tanstack/react-query'

import {
  IRequestCheckEmail,
  IRequestCreateAccount,
  IRequestCreateUser,
  IRequestRegisterUser,
  IRequestUpdateIdUserAccount,
  IResponse
} from 'types/services'

import api from 'configs/axios'

import {APIS} from 'const'

const checkEmailUserService = async (
  item: IRequestCheckEmail
): Promise<
  IResponse<{
    status: string
    message: string
  }>
> => {
  const {data} = await api.post(APIS.checkEmail, {
    user_email: item.user_email
  })

  return data
}

const registerUserService = async (
  item: IRequestRegisterUser
): Promise<{
  status: string
  fieldCount: number
  affectedRows: number
  insertId: number
  info: string
  serverStatus: number
  warningStatus: number
}> => {
  const {data} = await api.post(APIS.registerUser, {
    user_email: item.user_email,
    user_firstname: item.user_firstname,
    user_surename: item.user_surename,
    user_tel: item.user_tel
  })

  return data
}

const createAccountService = async (
  item: IRequestCreateAccount
): Promise<{
  status: string
  fieldCount: number
  affectedRows: number
  insertId: number
  info: string
  serverStatus: number
  warningStatus: number
}> => {
  const {data} = await api.post(APIS.createUserAccount, {
    account_email: item.account_email,
    account_password: item.account_password
  })
  return data
}

const updateUserAccount = async (
  item: IRequestUpdateIdUserAccount
): Promise<{
  status: string
}> => {
  const {data} = await api.post(APIS.updateUserIdAccount, {
    idaccountuser: item.idaccountuser,
    iduser: item.iduser
  })
  return data
}

export const useCheckUserEmailService = () => {
  return useMutation((data: IRequestCheckEmail) => checkEmailUserService(data))
}

export const useRegisterUserService = () => {
  return useMutation((data: IRequestCreateUser) => registerUserService(data))
}

export const useCreateAccountService = () =>
  useMutation(
    (data: IRequestCreateAccount) => createAccountService(data)
  )

export const useUpdateUserAccountService = () =>
  useMutation((data: IRequestUpdateIdUserAccount) => updateUserAccount(data))
