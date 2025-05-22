import {AxiosRequestConfig} from 'axios'

export type IResponseError = {
  code: number
  message: string
  config?: AxiosRequestConfig<any>
}

export type IResponse<DataType = any> = {
  status: string
  data: DataType
}
