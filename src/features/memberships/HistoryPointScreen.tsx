import React, {FC} from 'react'
import {SectionList, View} from 'react-native'

import {ILoadingProps} from 'types/components/animeted-type'

import {ClassicHeader} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {LottieAnimatedView} from 'features/loading'

import {horizontalScale, verticalScale} from 'helper'

import {lottie} from 'assets/lottie'

import {keyframes} from 'const'

import {
  ListHistoryPoint,
  TitleHistoryPoint
} from './components/HistoryPointScreen'
import {HistoryPointScreenStyle} from './style/HistoryPointScreen'

const MOCK = [
  {
    title: '350',
    data: [
      {
        date: '4 พฤศจิกายน 2565 · 10:00 น.',
        title: 'การซื้อคอร์สตรวจสุขภาพ ครอบครัว'
      }
    ]
  },
  {
    title: '350',
    data: [
      {
        date: '4 พฤศจิกายน 2565 · 10:00 น.',
        title: 'การซื้อคอร์สตรวจสุขภาพ ครอบครัว'
      }
    ]
  },
  {
    title: '350',
    data: [
      {
        date: '4 พฤศจิกายน 2565 · 10:00 น.',
        title: 'การซื้อคอร์สตรวจสุขภาพ ครอบครัว'
      }
    ]
  },
  {
    title: '350',
    data: [
      {
        date: '4 พฤศจิกายน 2565 · 10:00 น.',
        title: 'การซื้อคอร์สตรวจสุขภาพ ครอบครัว'
      }
    ]
  }
]

const HistoryPointScreen: FC<ILoadingProps> = ({loading = false}) => {
  return (
    <>
      <ClassicHeader
        headerLeft={<BackLeft />}
        title="$historyPoints"
        style={HistoryPointScreenStyle.header}
      />
      {loading ? (
        <LottieAnimatedView
          exiting={keyframes.fadeOutSize}
          lottiePath={lottie.skeletonHistoryPointScreen}
          lottieStyle={skeletionLoadingStyle}
          lottieContainer={skeletionLoadingContainerStyle({
            width: horizontalScale(340),
            marginHorizontal: horizontalScale(16),
            marginTop: verticalScale(42)
          })}
        />
      ) : (
        <SectionList
          sections={MOCK}
          renderItem={({item}) => (
            <ListHistoryPoint date={item.date} title={item.title} />
          )}
          style={HistoryPointScreenStyle.container}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({section: {title}}) => (
            <View style={HistoryPointScreenStyle.titleContainer}>
              <TitleHistoryPoint point={title} />
            </View>
          )}
        />
      )}
    </>
  )
}

export default HistoryPointScreen
