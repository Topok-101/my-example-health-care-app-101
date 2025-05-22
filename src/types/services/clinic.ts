export interface DataTypeClinicLocation {
  clinic: Clinic
  opent_time: OpentTime
}

export interface DataTypeClinicService {
  idservice: number
  service_name: string
  price: number
  imagePath: string
}

export type IResponseClinicLocation<DataType = DataTypeClinicLocation> = {
  status: string
  data: DataType
}

export type IResponseClinicService<DataType = DataTypeClinicService> = {
  status: string
  data: DataType[]
}

export interface reqClinicLocation {
  lat: string
  long: string
}

export interface Clinic {
  idclinic: number
  clinic_name: string
  description: string
  cover_image: string
  address: any
  phone: string
  mobile: string
  lat: string
  long: string
  distance: number
  km: string
}

export interface OpentTime {
  open: Open
  week: Week
}

export interface Open {
  isOpen: boolean
  comment: string
}

export interface Week {
  Sunday: Sunday[]
  Monday: Monday[]
  Tuesday: Tuesday[]
  Wednesday: Wednesday[]
  Thursday: Thursday[]
  Friday: Friday[]
  Saturday: Saturday[]
}

export interface Sunday {
  open: string
  close: string
}

export interface Monday {
  open: string
  close: string
}

export interface Tuesday {
  open: string
  close: string
}

export interface Wednesday {
  open: string
  close: string
}

export interface Thursday {
  open: string
  close: string
}

export interface Friday {
  open: string
  close: string
}

export interface Saturday {
  open: string
  close: string
}
