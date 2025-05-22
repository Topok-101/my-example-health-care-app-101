import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import {SafeAreaView} from 'react-native-safe-area-context'

import {TextHealthCare} from 'components'
import TabBar from 'components/tab-bar/TabBar'
import Images from 'assets/image/icons'

import {TopBarContentsStyles} from '../style'

const TopBarContents: React.FC<{
  onChangeTab: (index: number) => void
  value?: number
}> = props => {
  const {onChangeTab, value} = props

  return (
    <SafeAreaView style={TopBarContentsStyles.container}>
      <View style={TopBarContentsStyles.subHeader}>
        <TextHealthCare style={TopBarContentsStyles.fontTitle} textType="bold">
          $appointment
        </TextHealthCare>
        <TouchableOpacity>
          <FastImage source={Images.search} style={TopBarContentsStyles.Img} />
        </TouchableOpacity>
      </View>

      <View style={TopBarContentsStyles.containerTab}>
        <TabBar
          data={['$coming', '$history']}
          onChangeTab={onChangeTab}
          value={value}
        />
      </View>
    </SafeAreaView>
  )
}

export default TopBarContents
