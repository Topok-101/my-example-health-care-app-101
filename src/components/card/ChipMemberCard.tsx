import React from 'react'
import {StyleSheet, View} from 'react-native'
import Animated, {FadeIn} from 'react-native-reanimated'

import {IMemberships} from 'types/features/memberships'

import {SVGComponent, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import {svgs} from 'assets/svg'

const ViewAnimated = Animated.createAnimatedComponent(View)
const DURATION = 1000

const ChipMemberCard: React.FC<{
  type: IMemberships
  title: string
  right: boolean
}> = props => {
  const {type, right = false, title} = props
  const [TypeCard, setTypeCard] = React.useState<string>('')

  React.useEffect(() => {
    switch (type) {
      case 'beginner':
        setTypeCard(svgs.SVGChipBeginnerMember)
        break
      case 'plus':
        setTypeCard(svgs.SVGChipPlusMember)
        break
      case 'platinum':
        setTypeCard(svgs.SVGChipPlatinumMember)
        break
      case 'elite':
        setTypeCard(svgs.SVGChipEliteMember)
        break
    }
  }, [type])

  return (
    <ViewAnimated entering={FadeIn.duration(DURATION)}>
      {TypeCard !== '' && (
        <>
          <SVGComponent source={TypeCard} width={327} height={65} />
          <View style={[styles.containerText, right && styles.right]}>
            <TextHealthCare
              fontType="inter"
              textType="bold"
              style={{fontSize: moderateScale(36), color: colors.white}}>
              {title}
            </TextHealthCare>
          </View>
        </>
      )}
    </ViewAnimated>
  )
}

export default ChipMemberCard

const styles = StyleSheet.create({
  containerText: {
    position: 'absolute',
    height: 65,
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  right: {right: 0}
})
