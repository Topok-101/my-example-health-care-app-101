import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {PaginationProps} from 'types/components/paginatiom-type'

import {colors} from 'configs/theme'

import {horizontal, vertical} from './theme'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: vertical.xxSmall,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 0,
    height: horizontal.small
  },
  pagination: {
    width: horizontal.small,
    height: horizontal.small,
    borderRadius: 25,
    marginHorizontal: horizontal.xSmall
  }
})

export const Pagination: React.FC<PaginationProps> = ({
  size,
  paginationIndex = 0,
  scrollToIndex,
  paginationDefaultColor = colors.greyColorsGrey400,
  paginationActiveColor = colors.white,
  paginationStyle = {},
  paginationStyleItem = {},
  paginationStyleItemActive = {},
  paginationStyleItemInactive = {},
  onPaginationSelectedIndex,
  paginationTapDisabled = false,
  isLastItemHidden = false
}) => {
  return (
    <View style={[styles.container, paginationStyle]}>
      {Array.from({length: size}).map((_, index) =>
        isLastItemHidden && paginationIndex === size - 1 ? null : (
          <TouchableOpacity
            style={[
              styles.pagination,
              paginationStyleItem,
              paginationIndex === index
                ? {backgroundColor: paginationActiveColor}
                : {backgroundColor: paginationDefaultColor},
              paginationIndex === index
                ? paginationStyleItemActive
                : paginationStyleItemInactive
            ]}
            key={index}
            onPress={() => {
              scrollToIndex({index})
              onPaginationSelectedIndex?.()
            }}
            disabled={paginationTapDisabled}
          />
        )
      )}
    </View>
  )
}
