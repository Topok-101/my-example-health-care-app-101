import React from 'react'
import {StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import ReAnimate, {BounceIn, ZoomIn} from 'react-native-reanimated'

import {IAvatar} from 'types/components/Icon-type'

import {colors} from 'configs/theme'

const Avartar = (props: IAvatar) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ReAnimate.View
        entering={ZoomIn.springify().duration(250)}
        style={props.containerStyle}>
        <FastImage
          source={props.image}
          style={{
            width: props.sizeImage ? props.sizeImage : 44,
            height: props.sizeImage ? props.sizeImage : 44,
            borderRadius: props.sizeImage ? props.sizeImage * 2 : 44 * 2
          }}
        />
        {props.isActive && (
          <ReAnimate.View
            entering={BounceIn}
            style={[
              {
                width: props.sizeActiveOut ? props.sizeActiveOut : 8 + 6,
                height: props.sizeActiveOut ? props.sizeActiveOut : 8 + 6
              },
              styles.avtive
            ]}>
            <View
              style={[
                {
                  width: props.sizeActiveIn ? props.sizeActiveIn : 8,
                  height: props.sizeActiveIn ? props.sizeActiveIn : 8,
                  backgroundColor: colors.green,
                  borderRadius: 15
                }
              ]}
            />
          </ReAnimate.View>
        )}
      </ReAnimate.View>
    </View>
  )
}

export default Avartar
const styles = StyleSheet.create({
  avtive: {
    position: 'absolute',
    right: 1,
    bottom: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.greyColorsGrey100,
    borderWidth: 1,
    backgroundColor: colors.white
  }
})
