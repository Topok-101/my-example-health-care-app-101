import { ViewStyle } from "react-native"

export interface PropsCollapse {
  renderTitleView: (value: boolean) => React.ReactNode 
  renderCollapseView: React.ReactNode
  ContainerStyle?: ViewStyle
  TitleViewStyle?: ViewStyle
}
