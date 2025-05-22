import React from 'react'
import {ActivityIndicator, View} from 'react-native'
import Animated, {FadeInRight} from 'react-native-reanimated'

import {ICardHealthCareProps} from 'types/components/card-type'

import {SVGComponent, TextHealthCare} from 'components'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import {svgs} from 'assets/svg'

import {styles} from './style/MemberCard.style'

const ViewAnimated = Animated.createAnimatedComponent(View)
const DURATION = 1000

const MemberCard: React.FC<ICardHealthCareProps> = props => {
  const {type} = props
  const [TypeCard, setTypeCard] = React.useState<string>('')

  React.useEffect(() => {
    switch (type) {
      case 'beginner':
        setTypeCard(svgs.SVGCardBeginnerMember)
        break
      case 'plus':
        setTypeCard(svgs.SVGCardPlusMember)
        break
      case 'platinum':
        setTypeCard(svgs.SVGCardPlatinumMember)
        break
      case 'elite':
        setTypeCard(svgs.SVGCardEliteMember)
        break
      case 'standard':
        setTypeCard(svgs.SVGCardCourse)
        break
    }
  }, [type])

  return (
    <>
      {TypeCard !== '' ? (
        type !== 'standard' ? (
          <ViewAnimated entering={FadeInRight.duration(DURATION).mass(2)}>
            <SVGComponent source={TypeCard} width={327} height={205} />
            <View style={styles.container}>
              <TextHealthCare fontType="jm" style={styles.font}>
                {props.expireDate}
              </TextHealthCare>
            </View>
          </ViewAnimated>
        ) : (
          <ViewAnimated entering={FadeInRight.duration(DURATION).mass(2)}>
            <SVGComponent
              source={TypeCard}
              width={horizontalScale(352)}
              height={verticalScale(224)}
            />
            {props.header && (
              <View style={styles.imageLogo}>
                <SVGComponent source={props.header} height={32} width={101} />
              </View>
            )}

            <View style={styles.textTitleContainer}>
              <TextHealthCare
                fontType="inter"
                style={styles.textTitle}
                textType="bold">
                {props.textTitle}
              </TextHealthCare>
            </View>
          </ViewAnimated>
        )
      ) : (
        <ActivityIndicator color={colors.blue500} />
      )}
    </>
  )
}

export default MemberCard
