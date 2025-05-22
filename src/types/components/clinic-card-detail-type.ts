export type IClinicDetailCardProps = {
  clinicDetail: IClinicDetailCard
  onPress?: (clinic: IClinicDetailCard) => void
  underline?: boolean
}
export type IClinicDetailCard = {
  id: number
  title: string
  address: string
  status: boolean
  dutyTime: string
}
