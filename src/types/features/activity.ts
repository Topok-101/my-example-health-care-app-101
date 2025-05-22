import {Source} from 'react-native-fast-image'

export interface IActivityItems {
  img: Source
  type: 'doctor' | 'clinic' | 'gift'
  isActive: boolean
  contactType?: 'chat' | 'video'
  name: string
  description: string
  date: string
}
