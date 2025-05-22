export interface DataTypeGetAppointment {
  appointment: Appointment
  doctor: Doctor
  clinic: Clinic
}

export type IResponseGetAppointment<DataType = DataTypeGetAppointment> = {
    status: string
    data: DataType
  }

export interface Appointment {
  id_appointment: number
  id_service: number
  serviceName: string
  date: string
  time: string
  type_service: string
}

export interface Doctor {
  doctor_id: number
  doctor_name: string
  doctor_Occupation: string
  doctor_image: string
}

export interface Clinic {
  id_clinic: number
  clinic_name: string
  billing_id: any
}
