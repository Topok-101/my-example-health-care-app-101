import React from 'react'
import {FlatList, View} from 'react-native'
import Animated from 'react-native-reanimated'

import {useChangeFormStepAnimated} from 'hooks'

import {colors} from 'configs/theme'

import {ComingTab, HistoryTab, TopBarContents} from './components'

const AnimatedTabView = Animated.createAnimatedComponent(View)

export default function ActivityScreen() {
  const [Tab, setTab] = React.useState<number>(0)

  const animateTab = useChangeFormStepAnimated(1, 0)

  const onChangeTab = (index: number) => {
    setTab(index)
  }

  return (
    <>
      <TopBarContents onChangeTab={onChangeTab} value={Tab} />
      <FlatList
        data={[]}
        renderItem={() => <></>}
        style={{backgroundColor: colors.white, flex: 1}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {Tab === 0 && (
              <AnimatedTabView
                entering={animateTab.entering}
                exiting={animateTab.exiting}>
                <ComingTab />
              </AnimatedTabView>
            )}

            {Tab === 1 && (
              <AnimatedTabView
                entering={animateTab.entering}
                exiting={animateTab.exiting}>
                <HistoryTab />
              </AnimatedTabView>
            )}
          </>
        }
      />
    </>
  )
}
