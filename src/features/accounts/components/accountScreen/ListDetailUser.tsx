import Icon from '@assets/image/icons'
import React from 'react'
import {FlatList, ImageSourcePropType, ListRenderItem, View} from 'react-native'

import {IconBounceIn, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {ListDetailUserStyle} from '../../style/accountScreen'

const ListDetailUser = () => {
  const Mock: {
    img: ImageSourcePropType
    title: number
  }[] = [
    {img: Icon.calendarOutline, title: 28},
    {img: Icon.weight, title: 60},
    {img: Icon.height, title: 180}
  ]

  const ListItems: ListRenderItem<{
    img: ImageSourcePropType
    title: string
  }> = ({item}) => {
    return (
      <View style={ListDetailUserStyle.containerList}>
        <IconBounceIn
          image={item.img}
          hight={24}
          width={24}
          color={colors.blue300}
        />
        <TextHealthCare textType="medium" style={ListDetailUserStyle.text}>
          {item.title}
        </TextHealthCare>
      </View>
    )
  }
  return (
    <>
      <FlatList
        scrollEnabled={false}
        horizontal
        contentContainerStyle={ListDetailUserStyle.container}
        data={Mock as []}
        renderItem={ListItems}
      />
    </>
  )
}

export default ListDetailUser
