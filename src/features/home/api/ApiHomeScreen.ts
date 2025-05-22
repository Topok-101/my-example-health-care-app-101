import {useAppointmentServiceServices, useDoctorServices, usePointMemberServices, useServicesHomerServices} from 'services'

export const ApiHomeScreen = () => {
  const contextAppointmentService = useAppointmentServiceServices()
  const contextServicesHome = useServicesHomerServices()
  const contextDoctor = useDoctorServices()
  const contextPointMember = usePointMemberServices()

  return {
    contextAppointmentService,
    contextServicesHome,
    contextDoctor,
    contextPointMember
  }
}
