import {IFontThaiType} from './text-type'

export type ITabBarProps = {
  data: string[]
  value?: number
  defaultValue?: number
  onChangeTab: (index: number) => void
  activeBackgroudColor?: string
  fontType?: IFontThaiType
  activeTextColor?: string
}
