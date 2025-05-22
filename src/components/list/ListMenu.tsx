import React from 'react'
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native'
import FastImage from 'react-native-fast-image'

import {IListItems} from 'types/components'

import {IconWithRounder, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'

const ListMenu: React.FC<IListItems> = (props: IListItems) => {
  const {
    img,
    color,
    onPress,
    title,
    isIcon = true,
    horizontal = 24,
    isChevronRight = true
  } = props

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          paddingHorizontal: horizontalScale(horizontal),
          paddingVertical: !isIcon ? verticalScale(20) : verticalScale(12)
        }
      ]}
      onPress={onPress}
      activeOpacity={0.5}>
      <View style={styles.subContainer}>
        {isIcon && (
          <View style={{paddingRight: horizontalScale(16)}}>
            {img ? (
              <IconWithRounder
                source={img}
                width={24}
                height={24}
                iconColor={color}
              />
            ) : (
              <></>
            )}
          </View>
        )}
        <TextHealthCare style={styles.text} textType="medium">
          {title}
        </TextHealthCare>
      </View>

      <View>
        {isChevronRight && (
          <FastImage
            source={Images.chevronRight}
            style={styles.chevron}
            tintColor={colors.greyColorsGrey400}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default ListMenu

const styles = StyleSheet.create({
  chevron: {width: horizontalScale(24), height: verticalScale(24)},
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {fontSize: moderateScale(16)}
})
