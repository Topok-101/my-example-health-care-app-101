import React, {FC} from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'

import {IClassicHeader} from 'types/components'

import {useGetHeight} from 'hooks'

import {Header} from '@react-navigation/elements'

import {horizontalScale} from 'helper'

import {HeaderTitleText} from './items'

const ClassicHeader: FC<IClassicHeader> = ({
  headerLeft,
  headerRight,
  headerTitle,
  title,
  style
}): JSX.Element => {
  const checkFlex = (): number => {
    return headerLeft && headerRight && (headerTitle || title) || (headerTitle || title && headerRight)
      ? 0
      : headerTitle || title
      ? 1
      : 0
  }

  return (
    <View style={{...style}}>
      {Platform.OS === 'android' ? (
        <Header
          title=""
          headerStatusBarHeight={StatusBar.currentHeight}
          headerBackground={() => (
            <View style={styles.container}>
              <View
                style={[
                  styles.leftComponentStyle,
                  useGetHeight,
                  {flex: checkFlex()}
                ]}>
                {headerLeft}
              </View>
              <View style={[styles.titleComponentStyle, useGetHeight]}>
                {headerTitle ? (
                  headerTitle
                ) : (
                  <HeaderTitleText text={title || ''} />
                )}
              </View>
              <View
                style={[
                  styles.rightComponentStyle,
                  useGetHeight,
                  {flex: checkFlex()}
                ]}>
                {headerRight}
              </View>
            </View>
          )}
        />
      ) : (
        <Header
          title=""
          headerBackground={() => (
            <View style={styles.container}>
              <View
                style={[
                  styles.leftComponentStyle,
                  useGetHeight,
                  {flex: checkFlex()}
                ]}>
                {headerLeft}
              </View>
              <View style={[styles.titleComponentStyle, useGetHeight]}>
                {headerTitle ? (
                  headerTitle
                ) : (
                  <HeaderTitleText text={title || ''} />
                )}
              </View>
              <View
                style={[
                  styles.rightComponentStyle,
                  useGetHeight,
                  {flex: checkFlex()}
                ]}>
                {headerRight}
              </View>
            </View>
          )}
        />
      )}
    </View>
  )
}

export default ClassicHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftComponentStyle: {
    left: horizontalScale(24)
  },
  rightComponentStyle: {
    right: horizontalScale(24)
  },
  titleComponentStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
