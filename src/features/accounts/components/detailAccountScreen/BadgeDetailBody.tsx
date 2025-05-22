import React from 'react'
import {FlatList, ListRenderItem, View} from 'react-native'

import {BetterImage, TextHealthCare} from 'components'

import {
  BadgeDetailBodyStyle,
  ListProfileStyle
} from 'features/accounts/style/detailAccountScreen'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'

const BadgeDetailBody = () => {
  const Mock = [
    {title: '170', icon: Images.height},
    {title: '170', icon: Images.weight},
    {title: '170', icon: Images.water}
  ]

  const Items: ListRenderItem<{title: string; icon: number}> = ({item}) => {
    return (
      <View style={BadgeDetailBodyStyle.subContainer}>
        <BetterImage
          source={item.icon}
          style={BadgeDetailBodyStyle.img}
          tintColor={colors.blue600}
        />
        <TextHealthCare
          fontType="jm"
          textType="medium"
          style={BadgeDetailBodyStyle.text}>
          {item.title}
        </TextHealthCare>
      </View>
    )
  }

  return (
    <View>
      <TextHealthCare style={ListProfileStyle.title} textType="medium">
        $detailBody
      </TextHealthCare>
      <FlatList
        columnWrapperStyle={BadgeDetailBodyStyle.container}
        scrollEnabled={false}
        numColumns={2}
        data={Mock}
        renderItem={Items}
      />
    </View>
  )
}

export default BadgeDetailBody
