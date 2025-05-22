import React from 'react'
import {ActivityIndicator, View} from 'react-native'
import Animated, {FadeInRight} from 'react-native-reanimated'

import {SVGComponent} from 'components'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import {svgs} from 'assets/svg'

const ViewAnimated = Animated.createAnimatedComponent(View)
const DURATION = 1000
type props = {
  packageType: string
}

const CourseCard = ({packageType}: props) => {
  const [card, setCard] = React.useState<string>('')

  React.useEffect(() => {
    switch (packageType) {
      case 'worker':
        setCard(svgs.SVGWorker)
        break
      case 'lover':
        setCard(svgs.SVGLover)
        break
      case 'family':
        setCard(svgs.SVGFamily)
        break
    }
  }, [packageType])
  return (
    <>
      {packageType !== null ? (
        <ViewAnimated entering={FadeInRight.duration(DURATION).mass(2)}>
          <SVGComponent
            source={card}
            width={horizontalScale(352)}
            height={verticalScale(224)}
          />
        </ViewAnimated>
      ) : (
        <ActivityIndicator color={colors.blue500} />
      )}
    </>
  )
}

export default CourseCard
