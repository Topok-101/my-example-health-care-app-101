import React from 'react'
import {FlatList, ListRenderItem, View} from 'react-native'

import {IconWithRounder, TextHealthCare} from 'components'

import {DetailMemberListStyle} from 'features/memberships/style/TierMemberScreen'

import {horizontalScale, verticalScale} from 'helper'
import { Right } from 'types/services/member'

const DetailMemberList: React.FC<{
  data: Right[]
}> = props => {
  const {data} = props

  const Items: ListRenderItem<{
    name: string
    detail: string
    icon: string
  }> = ({item}) => {
    return (
      <View style={DetailMemberListStyle.subContainer}>
        {item.icon ? (
          <IconWithRounder source={{uri: item.icon}} height={20} width={20} />
        ) : (
          <View
            style={{height: verticalScale(20), width: horizontalScale(20)}}
          />
        )}
        <View style={DetailMemberListStyle.containerList}>
          <TextHealthCare textType="medium">{item.name}</TextHealthCare>
          <View style={DetailMemberListStyle.description}>
            <TextHealthCare fontType="jm" textType="light" style={{fontSize: 10}}>
              {item.detail}
            </TextHealthCare>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={DetailMemberListStyle.container}>
      <View style={DetailMemberListStyle.containerTitle}>
        <TextHealthCare style={DetailMemberListStyle.fontTitle} textType="medium">
          $privilege
        </TextHealthCare>
      </View>
      <FlatList scrollEnabled={false} data={data} renderItem={Items} />
    </View>
  )
}

export default DetailMemberList
