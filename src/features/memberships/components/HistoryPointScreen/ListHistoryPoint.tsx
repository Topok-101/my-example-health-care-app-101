import React from 'react'
import {View} from 'react-native'

import {
  BadgeStatus,
  IconBounceIn,
  IconWithRactangle,
  TextHealthCare
} from 'components'

import {ListHistoryPointStyles} from 'features/memberships/style/HistoryPointScreen'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'
import {svgs} from 'assets/svg'

const ListHistoryPoint: React.FC<{title: string; date: string}> = props => {
  const {date, title} = props
  return (
    <View style={ListHistoryPointStyles.container}>
      <View style={ListHistoryPointStyles.containerIcon}>
        <IconWithRactangle
          widthRounder={64}
          heightRounder={64}
          width={45}
          height={45}
          svg={svgs.SVGHealthCare}
          borderRadius={16}
        />
      </View>

      <View style={ListHistoryPointStyles.containerDescription}>
        <TextHealthCare
          textType="medium"
          style={ListHistoryPointStyles.containerTitle}>
          {title}
        </TextHealthCare>
        <View style={ListHistoryPointStyles.containerDate}>
          <IconBounceIn
            image={Images.calendarOutline}
            width={16}
            hight={16}
            color={colors.greyColorsGrey400}
          />
          <TextHealthCare style={ListHistoryPointStyles.date} textType="light">
            {date}
          </TextHealthCare>
        </View>
      </View>

      <View style={ListHistoryPointStyles.containerBadge}>
        <BadgeStatus title="$member" fontSize={12} />
      </View>
    </View>
  )
}

export default ListHistoryPoint
