import React, {FC} from 'react'
import {LayoutChangeEvent, View} from 'react-native'
import Animated from 'react-native-reanimated'

import {ICardPackageDetail} from 'types/components'

import {InputAwesome, MemberCard, TextHealthCare} from 'components'
import {DisplayDate} from 'components/date-display'

import {AppointmentDetailStyle} from 'features/appointment/styles/appointmentDetailScreen'

import {colors} from 'configs/theme'

import {verticalScale} from 'helper'

import Images from 'assets/image/icons'
import {svgs} from 'assets/svg'

import BadgeWithIcon from './BadgeWithIcon'
import CardPackage from './CardPackage'

const mockCardPackage: ICardPackageDetail = {
  price: '1,200',
  specialOfferText: 'ฟรี!! บริการตรวจสุขภาพถึงหน้าบ้าน',
  title: 'แพคเกจการตรวจสุขภาพ STANDARD'
}

const AnimatedView = Animated.createAnimatedComponent(View)

const AppointmentDetail: FC<{
  cardOppacityAnimatedStyle: {
    opacity: number
  }
  cardPositionAnimatedStyle: {
    paddingTop: number
  }
  onPackageCardLaout: (event: LayoutChangeEvent) => void
}> = ({
  onPackageCardLaout,
  cardOppacityAnimatedStyle,
  cardPositionAnimatedStyle
}) => {
  const customLabel = (isOutline: boolean) => (
    <View style={AppointmentDetailStyle.customBadgeLabelContainer}>
      <TextHealthCare
        fontType="inter"
        textType="medium"
        style={[
          AppointmentDetailStyle.textAmountPeopleService,
          {...(!isOutline ? {color: colors.white} : {})}
        ]}>
        2
      </TextHealthCare>
      <TextHealthCare
        textType="medium"
        style={[
          AppointmentDetailStyle.textSignAmountPeopleService,
          {...(!isOutline ? {color: colors.white} : {})}
        ]}>
        คน
      </TextHealthCare>
    </View>
  )

  return (
    <View>
      <View style={AppointmentDetailStyle.bookNumberContainer}>
        <TextHealthCare
          style={[
            AppointmentDetailStyle.textHeader,
            AppointmentDetailStyle.textAppointmentOrder
          ]}>
          ผู้เข้ารับบริการ
        </TextHealthCare>
        <InputAwesome
          value="BT0012312"
          iconLeft={Images.breifCase}
          editable={false}
        />
      </View>
      <View
        style={[AppointmentDetailStyle.appointmentDetailContainer]}
        onLayout={onPackageCardLaout}>
        <AnimatedView
          style={[
            {
              alignSelf: 'center',
              flex: 1,
              zIndex: -99
            },
            AppointmentDetailStyle.foreGroundContainer,
            {left: verticalScale(-12)},
            cardOppacityAnimatedStyle
          ]}>
          <MemberCard
            type="standard"
            header={svgs.SVGLogoHealthCareBold}
            textTitle={'STANDARD+'}
          />
        </AnimatedView>
        <Animated.View
          style={[
            AppointmentDetailStyle.cardPackageContainer,
            // {paddingTop: verticalScale(224 - 60)}
            cardPositionAnimatedStyle
          ]}>
          <CardPackage packageDetail={mockCardPackage} />
        </Animated.View>
      </View>

      <View style={AppointmentDetailStyle.appointmentDetailContainer}>
        <View style={AppointmentDetailStyle.badgeGroupContainer}>
          <BadgeWithIcon
            title="จำนวนผู้รับบริการ"
            customBadgeLabel={customLabel}
            icon={Images.patients}
            isOutline
            isIconSpace
          />
          <BadgeWithIcon
            title="สถานะการชำระเงิน"
            badgeLabel="ชำระเงินแล้ว"
            icon={Images.check}
            badgeColor={colors.green}
          />
        </View>
        <View style={AppointmentDetailStyle.inputContainer}>
          <DisplayDate
            date="21 พฤศจิกายน 2565"
            time="11:00 น."
            title="วันเวลาที่นัดหมาย"
          />
        </View>
      </View>
    </View>
  )
}

export default AppointmentDetail
