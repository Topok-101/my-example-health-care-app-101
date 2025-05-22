import {IValidNPN} from 'types/hooks'

export type IPinComponentProps = {
  pinLength: number
  onChangePin: (value: string) => void
  status?: IValidNPN | null
}
