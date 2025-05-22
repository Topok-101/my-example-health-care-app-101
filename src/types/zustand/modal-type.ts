import {INameSreen} from '../components'

export type IIMage = 'LOCATION' | 'SUCCESS' | 'LOGOUT' | 'WORNG'
export interface IModalClassic {
  title?: string
  subTitle?: string
  onPress?: () => void
  visible: boolean
  goTo?: INameSreen
  image?: IIMage
  onPressText?: string
  onCancel?: () => void
  onCancelText?: string
  setModal: (pond: {
    title?: string
    subTitle?: string
    onPress?: () => void
    visible: boolean
    goTo?: INameSreen
    image?: IIMage
    onPressText?: string
    onCancel?: () => void
    onCancelText?: string
  }) => void
}
