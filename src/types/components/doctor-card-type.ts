import {Source} from 'react-native-fast-image'

export type IDoctorCard = {
  id: number
  name: string
  clinic: string
  position: string
  img: number | Source | undefined
}
export type IDoctorCardProps = {
  doctor: IDoctorCard
  checked?: boolean
  onPress?: (doctor: IDoctorCard) => void
  underline?: boolean
  checkable?: boolean
}
