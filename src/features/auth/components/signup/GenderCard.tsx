import {genderStyles} from 'features/auth/style/signup.style'
import React, {FC} from 'react'
import {Pressable, View} from 'react-native'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'
import Reanimated, {
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'

import {IGenderCardProps} from 'types/features/select-gender-type'

import {JustImage, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

const AnimatedCardView = Reanimated.createAnimatedComponent(View)
const GenderCard: FC<IGenderCardProps> = ({
  gender,
  image,
  selected = false,
  onSelectGender
}) => {
  const pressed = useSharedValue(false)

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onTouchesDown(() => {
      pressed.value = true
    })
    .onTouchesUp(() => {
      pressed.value = false
    })

  const animatedStyleCard = useAnimatedStyle(() => {
    return {
      transform: [{scale: pressed.value ? 1.01 : 1}]
    }
  })
  const handleOnSelectGender = () => {
    onSelectGender(gender)
  }
  return (
    <Pressable onPress={handleOnSelectGender}>
      <GestureDetector gesture={Gesture.Exclusive(singleTap)}>
        <View style={[genderStyles.genderContainer]}>
          <AnimatedCardView
            style={[
              animatedStyleCard,
              genderStyles.genderCardView,
              {...(selected && {borderColor: colors.blue600})}
            ]}>
            <JustImage style={genderStyles.genderCardImage} source={image} />
          </AnimatedCardView>
          <TextHealthCare
            textType="bold"
            style={genderStyles.textGenderType}>{`$${gender}`}</TextHealthCare>
        </View>
      </GestureDetector>
    </Pressable>
  )
}

export default GenderCard
