import {AxiosError, AxiosResponse} from 'axios'
import {get} from 'lodash'

import {IResponseError} from 'types/services/services'

const formatResponse = (
  response: AxiosError<IResponseError> | AxiosResponse<IResponseError>
): IResponseError => {
  const axiosResponse = response as AxiosError<IResponseError>
  const otherResponse = get(axiosResponse, 'response.data', {})
  const message: string = get(axiosResponse, 'response.data.message', '')
  const code: number = get(axiosResponse, 'response.status', 0)

  return {
    ...otherResponse,
    config: axiosResponse.config,
    message,
    code
  }
}

export {formatResponse}
