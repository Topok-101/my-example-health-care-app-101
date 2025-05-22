import React from 'react'
import {Source} from 'react-native-fast-image'

export type IBadgeWithIconProps = {
  badgeLabel?: string
  isOutline?: boolean
  isIconSpace?: boolean
  title?: string
  iconColor?: string
  icon?: Source
  customBadgeLabel?: (isOutline: boolean) => React.ReactNode
  badgeColor?: string
}
