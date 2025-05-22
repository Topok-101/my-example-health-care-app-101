export interface TokenRefresh {
  accessToken: string
  refreshToken: string
}

export interface DataTypeAuth extends TokenRefresh {
  iduser?: number
  email?: string
}

export type IResponseAuth<DataType = DataTypeAuth> = {
  status: string
  data: DataType
}

export interface IRequestAuthEmail {
  account_email: string
  account_password: string
}
