export interface DataTypeDoctor {
  clinicid: number
  iduser: number
  fullname: string
  occupation: string
  imageid: string
  imagepath: string
}

export type IResponseDoctor<DataType = DataTypeDoctor> = {
  status: string
  data: DataType[]
}
