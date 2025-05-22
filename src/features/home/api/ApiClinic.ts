import {isEmpty} from 'lodash'
import React from 'react'
import {
  useClinicByLocationServiceServices,
  useClinicServiceServices
} from 'services'

import {reqClinicLocation} from 'types/services/clinic'

export const ApiClinic = (location: reqClinicLocation) => {
  const contextClinicByLocationService = useClinicByLocationServiceServices({
    lat: `${location.lat}`,
    long: `${location.long}`
  })

  const contextClinicService = useClinicServiceServices(
    `${contextClinicByLocationService?.data?.data.clinic.idclinic}`
  )

  React.useEffect(() => {
    !isEmpty(contextClinicByLocationService?.data?.data.clinic) &&
      contextClinicService.refetch()
  }, [contextClinicByLocationService?.data?.data.clinic])

  return {
    contextClinicByLocationService,
    contextClinicService
  }
}
