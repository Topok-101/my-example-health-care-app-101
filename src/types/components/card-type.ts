import {DataSource} from '@shopify/react-native-skia'

import {IMemberships} from 'types/features/memberships'

export type IMemberCardProps = {
  type: IMemberships
  expireDate?: string
}

export type IAppointmentCardProps = {
  type: 'standard'
  header?: DataSource
  textTitle?: string
}

export type ICardHealthCareProps = IMemberCardProps | IAppointmentCardProps
