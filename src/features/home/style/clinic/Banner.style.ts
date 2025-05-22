import { verticalScale } from "helper"
import { Dimensions, StyleSheet } from "react-native"

const {width} = Dimensions.get('window')
export const stylesBanner = StyleSheet.create({
  img: {
    width: width,
    height: verticalScale(164),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
})
