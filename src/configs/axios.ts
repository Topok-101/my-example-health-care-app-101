import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestTransformer,
  AxiosResponseTransformer
} from 'axios'
import dayjs from 'dayjs'
import jwt_decode, {JwtPayload} from 'jwt-decode'
import {get, isEmpty} from 'lodash'
import {refreshTokenService} from 'services'

import {IResponseError} from 'types/services/services'

import {useAuthStore} from 'storez/auth'

import {formatResponse} from 'helper/formatResponse'

import env from './env'

const transformResponse: AxiosResponseTransformer = data =>
  data ? JSON.parse(data) : {}
const transformRequest: AxiosRequestTransformer = data => JSON.stringify(data)

const TIME_OUT = 30000
// const DELAY_MODAL = 800

const stackError: string[] = []

// const alerts = (message: string) => {
//   stores.dispatch(
//     actions.modalAction.reducerModal({
//       image: 'WORNG',
//       visible: true,
//       title: '$somethingWrong',
//       subTitle: message,
//       onPress: () => {
//         stores.dispatch(actions.modalAction.reducerModal({visible: false}))
//       },
//       onPressText: '$confirm'
//     })
//   )
// }

const setConfigure = (
  contentType: '' | 'application/json',
  token: string,
  config: AxiosRequestConfig
) => {
  const configure: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config.headers,
      ['Authorization']: 'Bearer ' + token,
      ['Content-Type']: contentType
    },
    transformResponse,
    transformRequest,
    params: config.params,
    url: config.url?.replace(/([^:])(\/\/)/g, '$1/')
  }
  return configure
}

const isExpToken = (token: string): boolean => {
  if (!isEmpty(token)) {
    const user = jwt_decode<JwtPayload>(token)
    const isExpired = dayjs.unix(user.exp || 0).diff(dayjs()) < 1
    return isExpired
  }
  return false
}

const requestInterceptor = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const contentType = !isEmpty(get(config, 'header.Content-Type', ''))
    ? get(config, 'header.Content-Type', '')
    : 'application/json'

  const {setItemUser, userToken} = useAuthStore.getState()

  const token: string = userToken.accessToken

  if (!isExpToken(token)) return setConfigure(contentType, token, config)

  const {data} = await refreshTokenService(userToken!)

  setItemUser({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    email: userToken.email,
    iduser: userToken.iduser
  })

  data.accessToken || (data.refreshToken && stackError.splice(0, 0))
  // console.log('refresh token')
  return setConfigure(contentType, data.accessToken, config)
}

const handleRequestError = (error: AxiosError) => {
  return Promise.reject(error)
}

const StackError = (error: {message: string}): number => {
  if (error.message === 'JSON Parse error: Unexpected token: U') {
    stackError.push(error.message)
  }
  return stackError.length
}

const handleResponseError = async (
  error: AxiosError<IResponseError>
): Promise<IResponseError> => {
  if (
    error.message === "Cannot read property 'accessToken' of undefined" ||
    error.status === 401 ||
    error.message === 'JSON Parse error: Unexpected token: B' ||
    StackError(error) > 10
  ){
    return Promise.reject(useAuthStore.getState().setLogout())}

  const errorResponse = formatResponse(error)
  // setTimeout(() => {
  //   alerts(errorResponse.message)
  // }, DELAY_MODAL)

  return Promise.reject(errorResponse)
}

const api: AxiosInstance = axios.create({
  baseURL: env.API_ENDPOINT,
  timeout: TIME_OUT,
  responseType: 'json'
})

api.defaults.headers.common['Accept'] = 'application/json'
api.interceptors.request.use(requestInterceptor, handleRequestError)
api.interceptors.response.use(response => response, handleResponseError)

export default api
