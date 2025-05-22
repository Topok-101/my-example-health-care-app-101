import React, {FC, useState} from 'react'
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  View
} from 'react-native'
import Animated from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel'
import {CarouselRenderItem} from 'react-native-reanimated-carousel/lib/typescript/types'

import {MakeAppointmentFormProps} from 'types/features'

import {useAppointmentStore} from 'storez'

import {IconBounceIn, TextHealthCare} from 'components'
import {ButtonHealthCare} from 'components/button'

import {MakeAppointmentScreenStyle} from 'features/appointment/styles/makeAppointmentScreen'
import {animatedChangeSignUpStep} from 'features/auth/animations/animatedChangeSignUpStep'
import FormHeader from 'features/auth/components/signup/SignUpFormHeader'
import loginStyle from 'features/auth/style/login.style'
import {signUpFormStyles} from 'features/auth/style/signup.style'

import {colors} from 'configs/theme'

import {horizontalScale, listDate, moderateScale, verticalScale} from 'helper'

import Icons from 'assets/image/icons'

import {DayCard, TimeCard} from '.'

const AnimatedView = Animated.createAnimatedComponent(View)
const PAGE_WIDTH = Dimensions.get('window').width

const MakeAppointmentFormStep3: FC<MakeAppointmentFormProps> = ({
  prevStep = 0,
  onChangeStep
}) => {
  const {formCurrentStep} = useAppointmentStore()
  const {entering, exiting} = animatedChangeSignUpStep(
    prevStep,
    formCurrentStep
  )
  const [date, setDate] = useState(listDate())
  const [times, setTime] = useState([
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false},
    {time: '08:00', active: false}
  ])

  const handleNextStep = () => {
    onChangeStep(4)
  }

  const onCheckIndex = (index: number, types: 'time' | 'date') => {
    if (types === 'time') {
      setTime(
        times.map((item, ind) =>
          ind === index
            ? {...item, active: !times[index].active}
            : {...item, active: false}
        )
      )
    } else {
      setDate(
        date.map((item, ind) =>
          ind === index ? {...item, active: true} : {...item, active: false}
        )
      )
    }
  }

  const renderItems: CarouselRenderItem<{
    active?: boolean
    day?: string
    date?: string
  }> = ({item, index}) => {
    const {active, date, day} = item
    return (
      <DayCard
        index={index}
        active={active}
        date={date}
        day={day}
        callBack={onCheckIndex}
      />
    )
  }

  const renderTime: ListRenderItem<{time: string; active: boolean}> = ({
    item,
    index
  }) => {
    const {time, active} = item
    return (
      <TimeCard
        callBack={onCheckIndex}
        active={active}
        index={index}
        time={time}
      />
    )
  }

  return (
    <View style={[loginStyle.scrollContainer]}>
      <AnimatedView entering={entering} exiting={exiting}>
        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={MakeAppointmentScreenStyle.row}
          data={times}
          renderItem={renderTime}
          ListHeaderComponent={
            <>
              <View style={MakeAppointmentScreenStyle.formContainer}>
                <FormHeader
                  headerTitle="$specificYourDateAppointment"
                  subHeader="$pleaseComeBeforeTheAppointmentTime"
                />
              </View>

              <View>
                <View
                  style={[
                    MakeAppointmentScreenStyle.rowContainer,
                    MakeAppointmentScreenStyle.formContainer
                  ]}>
                  <TextHealthCare
                    fontType="ibm"
                    textType="medium"
                    style={{fontSize: moderateScale(16)}}>
                    $assignDay
                  </TextHealthCare>

                  <IconBounceIn
                    image={Icons.calendarOutline}
                    width={24}
                    hight={24}
                    color={colors.greyColorsGrey400}
                  />
                </View>
                <View
                  style={{
                    paddingLeft: horizontalScale(24),
                    paddingVertical: verticalScale(12)
                  }}>
                  <Carousel
                    width={horizontalScale(396 / 5 - 24) + horizontalScale(12)}
                    height={63}
                    style={{
                      width: PAGE_WIDTH,
                      justifyContent: 'center'
                    }}
                    data={date}
                    renderItem={renderItems}
                  />
                </View>
                <View style={[MakeAppointmentScreenStyle.line]} />
              </View>
            </>
          }
          ListFooterComponent={
            <>
              <View
                style={[
                  signUpFormStyles.textFooterContainer,
                  MakeAppointmentScreenStyle.formContainer
                ]}>
                <TouchableOpacity
                  onPress={() => onChangeStep(2)}
                  style={{paddingLeft: horizontalScale(4)}}
                  activeOpacity={0.5}>
                  <TextHealthCare
                    textType="semibold"
                    style={{color: colors.blue500}}>
                    $imNotSure
                  </TextHealthCare>
                </TouchableOpacity>
              </View>

              <View
                style={[
                  signUpFormStyles.buttonContainer,
                  MakeAppointmentScreenStyle.formContainer
                ]}>
                <ButtonHealthCare
                  fontSize={moderateScale(16)}
                  title="$next"
                  onPress={handleNextStep}
                  disabled={
                    !(
                      date.some(item => item.active === true) &&
                      times.some(item => item.active === true)
                    )
                  }
                />
              </View>
            </>
          }
        />
      </AnimatedView>
    </View>
  )
}

export default MakeAppointmentFormStep3
