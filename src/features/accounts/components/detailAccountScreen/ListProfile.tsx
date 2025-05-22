import React from 'react'
import {ListRenderItem, View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'

import {InputAwesome, TextHealthCare} from 'components'

import {ListProfileStyle} from 'features/accounts/style/detailAccountScreen'

import {colors} from 'configs/theme'

const ListProfile: React.FC<{
  title: string
  iconColor?: string
  listItems: {
    editable: boolean
    value: string
    type: string
    img?: number
    isLeftEmpty: boolean
  }[]
}> = props => {
  const {listItems, title, iconColor = colors.blue600} = props

  const Items: ListRenderItem<{
    editable: boolean
    value: string
    type: string
    img: number
    isLeftEmpty: boolean
  }> = ({item}) => {
    return (
      <View style={ListProfileStyle.subContainer}>
        {!item.isLeftEmpty ? (
          <InputAwesome
            editable={item.editable}
            value={item.value}
            iconLeft={item.img}
            iconColor={iconColor}
            backgroundColor={colors.white}
            keyboardType={
              item.type === 'name'
                ? 'default'
                : item.type === 'phone'
                ? 'name-phone-pad'
                : item.type === 'email'
                ? 'email-address'
                : 'default'
            }
          />
        ) : (
          <InputAwesome
            editable={item.editable}
            value={item.value}
            isLeftEmpty={item.isLeftEmpty}
            backgroundColor={colors.white}
            keyboardType={
              item.type === 'name'
                ? 'default'
                : item.type === 'phone'
                ? 'name-phone-pad'
                : item.type === 'email'
                ? 'email-address'
                : 'default'
            }
          />
        )}
      </View>
    )
  }
  return (
    <>
      <TextHealthCare style={ListProfileStyle.title} textType="medium">
        {title}
      </TextHealthCare>
      <FlatList
        scrollEnabled={false}
        data={listItems as []}
        renderItem={Items}
      />
    </>
  )
}

export default ListProfile
