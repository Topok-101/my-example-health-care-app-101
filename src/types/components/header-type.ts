import React from 'react'
import {ViewStyle} from 'react-native'

export type IClassicHeader = {
  headerLeft?: React.ReactNode
  headerRight?: React.ReactNode
  headerTitle?: React.ReactNode
  title?: string,
  style?: ViewStyle
}

export type IClassicHeaderTitle = {
  text: string
}

export type IHeaderNumber = {
  currentPage: number
  totalPage: number
}

export type IHeaderBackProps = {
  onPress?: () => void
  canGobackStep?: boolean
}

export type IHeaderSignUpProps = {
  headerTitle: string
  subHeader?: string
  customSubheader?: React.ReactNode
}
