import {Source} from 'react-native-fast-image'

export interface DataTypeServicesHome {
  clinicId?: number
  serviceId?: number
  serviceName?: string
  image?: Source
}

export type IResponseDoctorHome<DataType = DataTypeServicesHome> = {
  status: string
  data: DataType[]
}
