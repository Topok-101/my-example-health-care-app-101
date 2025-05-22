import React from 'react'
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native'

import {IconWithRounder, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'

import {CardItemStyle} from '../../style/accountScreen'

const CardItem = () => {
  const data = [
    {Icon: Images.calendarOutline, title: '$appointment'},
    {Icon: Images.cardiologist, title: '$resultOfCheck'},
    {Icon: Images.discount, title: '$gift'},
    {Icon: Images.share, title: '$refferal'}
  ]

  const Items: ListRenderItem<{Icon: number; title: string}> = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.5} style={CardItemStyle.items}>
        <IconWithRounder source={item.Icon} iconColor={colors.blue600} />
        <TextHealthCare style={CardItemStyle.text} textType="medium">
          {item.title}
        </TextHealthCare>
      </TouchableOpacity>
    )
  }

  return (
    <View style={CardItemStyle.container}>
      <FlatList
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        data={data}
        renderItem={Items}
        scrollEnabled={false}
        numColumns={2}
      />
    </View>
  )
}

export default CardItem
