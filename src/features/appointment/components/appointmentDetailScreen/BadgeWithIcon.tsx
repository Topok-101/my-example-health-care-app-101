import React, {FC} from 'react'
import {View} from 'react-native'

import {IBadgeWithIconProps} from 'types/components'

import {JustImage, TextHealthCare} from 'components'

import {BadgeWithImageStyle} from 'features/appointment/styles/appointmentDetailScreen'

import {colors} from 'configs/theme'

import {verticalScale} from 'helper'

const BadgeWithIcon: FC<IBadgeWithIconProps> = ({
  badgeLabel,
  iconColor = colors.blue600,
  isOutline = false,
  isIconSpace = false,
  title,
  icon,
  customBadgeLabel,
  badgeColor
}) => {
  return (
    <View style={BadgeWithImageStyle.container}>
      {title && (
        <TextHealthCare style={BadgeWithImageStyle.textTitle}>{title}</TextHealthCare>
      )}
      <View
        style={[
          BadgeWithImageStyle.badgeContainer,
          {
            ...(!isOutline
              ? {
                  backgroundColor: badgeColor ? badgeColor : colors.white,
                  borderWidth: 0
                }
              : {})
          }
        ]}>
        {icon && (
          <JustImage
            style={[
              BadgeWithImageStyle.badgeImage,
              {...(isIconSpace ? {marginRight: verticalScale(16)} : {})}
            ]}
            source={icon}
            tintColor={isOutline ? iconColor : colors.white}
          />
        )}
        {customBadgeLabel ? (
          customBadgeLabel(isOutline)
        ) : (
          <TextHealthCare
            textType="medium"
            style={[
              BadgeWithImageStyle.badgeLabel,
              {...(!isOutline ? {color: colors.white} : {})}
            ]}>
            {badgeLabel}
          </TextHealthCare>
        )}
      </View>
    </View>
  )
}

export default BadgeWithIcon
