import {
  Canvas,
  LinearGradient,
  RoundedRect,
  useValue,
  vec
} from '@shopify/react-native-skia'
import React, {useEffect} from 'react'
import {Animated, Dimensions, StyleSheet, View} from 'react-native'

import {ProgressbarProps} from 'types/components/progressbar-type'

import {TextHealthCare} from 'components/typography'

import {colors} from 'configs/theme'

const {width} = Dimensions.get('screen')

const ProgressBar = ({
  widthPercentage,
  isRange,
  textLeft,
  textRight,
  progressRadius = 10,
  progressBackRadius = 4,
  progressBackColor = colors.greyColorsGrey100,
  height = 6,
  colorStart,
  colorStop,
  textLeftStyle,
  textRightStyle
}: ProgressbarProps) => {
  const animatedWidth = React.useRef(new Animated.Value(0)).current
  const finalWidth = (width * widthPercentage) / 100
  const barWidth = useValue(finalWidth)

  useEffect(() => {
    Animated.spring(animatedWidth, {
      toValue: finalWidth,
      bounciness: 5,
      speed: 2,
      useNativeDriver: false
    }).start()
  }, [])
  const style = StyleSheet.create({
    barContainer: {
      backgroundColor: progressBackColor,
      height: height,
      borderRadius: progressBackRadius,
      width: '100%'
    }
  })
  return (
    <View>
      {isRange && (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {textLeft && (
            <TextHealthCare style={textLeftStyle} fontType='inter'>{textLeft}</TextHealthCare>
          )}
          {textRight && (
            <TextHealthCare style={textRightStyle} fontType='inter'>{textRight}</TextHealthCare>
          )}
        </View>
      )}
      <View style={style.barContainer}>
        <Animated.View style={{width: animatedWidth}}>
          <Canvas style={style.barContainer}>
            <RoundedRect
              x={0}
              y={0}
              width={barWidth}
              height={height}
              r={progressRadius}>
              <LinearGradient
                start={vec(0, 0)}
                end={vec(width, height)}
                colors={[colorStart, colorStop]}
              />
            </RoundedRect>
          </Canvas>
        </Animated.View>
      </View>
    </View>
  )
}

export default ProgressBar
