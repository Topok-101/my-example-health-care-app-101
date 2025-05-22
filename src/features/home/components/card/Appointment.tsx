import {isEmpty} from 'lodash'
import React, {FC} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {IResponseGetAppointment} from 'types/services/appointment'

import {Avartar, BetterImage, TextHealthCare} from 'components'
import {BadgeStatus} from 'components/badge'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {styles} from 'features/home/style/card/Appoint.style'
import {LottieAnimatedView} from 'features/loading'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {
  MapTime,
  formatThaiDate,
  horizontalScale,
  moderateScale,
  verticalScale
} from 'helper'

import Images from 'assets/image/example'
import Icon from 'assets/image/icons'
import {lottie} from 'assets/lottie'

import {keyframes, namesScreen} from 'const'

const Appointment: FC<{data: IResponseGetAppointment; isLoading: boolean}> = ({
  data,
  isLoading
}) => {
  const navigation = useNavigation()

  return isLoading ? (
    <LottieAnimatedView
      exiting={keyframes.fadeOutSize}
      lottieContainer={skeletionLoadingContainerStyle({
        width: horizontalScale(327),
        marginTop: verticalScale(24)
      })}
      lottieStyle={skeletionLoadingStyle}
      lottiePath={lottie.skeletonCardAppointment}
      autoplay
      loop
    />
  ) : !isEmpty(data?.data) ? (
    <View style={styles.maxWidth}>
      <TouchableOpacity
        style={styles.conatiner}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(
            namesScreen.AppointmentStack as never,
            {screen: namesScreen.AppointmentDetailScreen} as never
          )
        }>
        <View style={styles.upcomingTextLayout}>
          <TextHealthCare textType="medium" style={styles.text14Grey400}>
            $upcoming
          </TextHealthCare>
          <View style={styles.horizonCenterLayout}>
            <BetterImage
              source={Icon.calendarOutline}
              style={styles.imageCalendarMg4}
              resizeMode={'contain'}
            />
            <TextHealthCare textType="semibold" style={styles.textBlack16}>
              $appointment
            </TextHealthCare>
          </View>
        </View>

        <View style={styles.doctorContainer}>
          <View style={styles.nameTag}>
            <TextHealthCare
              textType="bold"
              style={styles.textBlack16}
              numberOfLines={1}>
              {data?.data.doctor.doctor_name}
            </TextHealthCare>
            <TextHealthCare
              textType="semibold"
              style={styles.textBlue12}
              numberOfLines={1}>
              {data?.data.doctor.doctor_Occupation}{' '}
              {data?.data.clinic.clinic_name}
            </TextHealthCare>
          </View>
          <View>
            <Avartar
              image={
                isEmpty(data?.data.doctor.doctor_image)
                  ? Images.AvatarDefault
                  : {uri: data?.data.doctor.doctor_image}
              }
              sizeImage={moderateScale(44)}
            />
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.dateMainContainer}>
          <View style={styles.horizonCenterLayout}>
            <BetterImage
              source={Icon.calendarOutline}
              style={styles.imageCalendarMg8}
              tintColor={colors.greyColorsGrey500}
              resizeMode={'contain'}
            />
            <TextHealthCare textType="medium" style={styles.text14Grey500}>
              {formatThaiDate(data?.data.appointment.date || '')} ·{' '}
              {MapTime(data?.data.appointment.time || '')}
            </TextHealthCare>
          </View>
          <BadgeStatus title={data?.data.appointment.type_service} />
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <></>
  )
}

export default Appointment
