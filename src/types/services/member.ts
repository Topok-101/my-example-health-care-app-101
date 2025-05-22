export interface DataTypeMember {
  current_point: number
  maxpoint: number
  next_tier: string
  tier: string
}

export type IResponseMember<DataType = DataTypeMember> = {
  status: string
  data: DataType
}

export type IResponseMemberDetail<DataType = DataTypeDetail> = {
  status: string
  data: DataType[]
}

export interface DataTypeDetail {
  title: TitleMemberDetail
  data: Right[][]
}

export interface TitleMemberDetail {
  title: string
  rate: string
  type: string
}

export interface Right {
  name: string
  detail: string
  icon: string
}