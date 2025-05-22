export type MakeAppointmentFormProps = {
  onChangeStep: (step: number) => void
  onPressUp?: () => void
  onPressDown?: () => void
  prevStep: number
}
