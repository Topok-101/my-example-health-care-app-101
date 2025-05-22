import React from 'react'
import {FlatList, ImageSourcePropType, ListRenderItem, View} from 'react-native'

import {
  Avartar,
  BadgeStatus,
  BetterImage,
  ClassicHeader,
  IconBounceIn,
  JustImage,
  TextHealthCare
} from 'components'
import CloseRight from 'components/header/items/HeaderCloseRight'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

import Images from 'assets/image/example'
import ImagesIcon from 'assets/image/icons'
import ImagesIllust from 'assets/image/illustrate'

import {styles} from './style/NotificationScreen.style'

const NotificationScreen = () => {
  const DATA = [
    {
      id: '1',
      title: 'ยินดีด้วย คุณได้รับ',
      avatarImage: ImagesIllust.gift,
      detailTitle: 'การแชร์ของคุณไปยังคุณ',
      detailSubtitle: '',
      date: '11 พฤศจิกายน 2565',
      buttonText: 'ของขวัญ',
      buttonColor: 'green',
      icon: ImagesIcon.calendarOutline,
      type: 'share'
    },
    {
      id: '2',
      title: 'คุณได้รับ',
      avatarImage: ImagesIcon.HealthCare,
      detailTitle: 'การซื้อคอร์สตรวจสุขภาพครอบครัว',
      detailSubtitle: '',
      date: '11 พฤศจิกายน 2565',
      buttonText: `$member`,
      buttonColor: 'green',
      icon: ImagesIcon.calendarOutline,
      type: 'receive'
    },
    {
      id: '3',
      title: 'วันศุกร์ 4 พฤศจิกายน 2565',
      avatarImage: Images.doctor1,
      detailTitle: 'นทพญ.ปวีณา ขำดำ',
      detailSubtitle: 'นัดหมายพูดคุย/ปรึกษา',
      date: '4 พฤศจิกายน 2565',
      buttonText: `$chat`,
      buttonColor: 'green',
      icon: ImagesIcon.calendarOutline,
      type: 'appointment'
    },
    {
      id: '4',
      title: 'วันศุกร์ 4 พฤศจิกายน 2565',
      avatarImage: Images.BTClinic,
      detailTitle: 'BT LAB - Medical Clinic',
      detailSubtitle: 'นัดหมายเข้าตรวจ',
      date: '4 พฤศจิกายน 2565',
      buttonText: '',
      buttonColor: 'green',
      icon: ImagesIcon.calendarOutline,
      type: 'map'
    },
    {
      id: '5',
      title: 'วันเสาร์ 19 พฤศจิกายน 2565',
      avatarImage: Images.doctor1,
      detailTitle: 'นทพญ.ปวีณา ขำดำ',
      detailSubtitle: 'นัดหมายพูดคุย/ปรึกษา',
      date: '19 พฤศจิกายน 2565',
      buttonText: 'นัดพบ',
      buttonColor: 'blue',
      icon: ImagesIcon.calendarOutline,
      type: 'appointment'
    }
  ]

  const Item: ListRenderItem<{
    id: string
    title?: string
    avatarImage?: any
    detailTitle?: string
    detailSubtitle?: string
    date: string
    buttonText?: string
    icon: ImageSourcePropType
    type?: string
    buttonColor?: string
  }> = ({item}) => {
    return (
      <View style={styles.mgBottom27}>
        <View style={styles.flexRow}>
          <TextHealthCare textType="bold" style={styles.font18}>
            {item.title}
          </TextHealthCare>
          {item.type === 'share' || item.type === 'receive' ? (
            <View style={styles.flexRow}>
              <TextHealthCare
                textType="bold"
                style={[styles.font18, {color: colors.blue600}]}>
                {' 350 '}
              </TextHealthCare>
              <TextHealthCare textType="bold" style={styles.font18}>
                $point
              </TextHealthCare>
            </View>
          ) : null}
        </View>

        <View style={[styles.flexRow, {marginTop: 17}]}>
          {item.type === 'appointment' || item.type === 'map' ? (
            <View style={styles.avatarContiner}>
              <Avartar image={item.avatarImage} sizeImage={moderateScale(64)} />
            </View>
          ) : (
            <View style={styles.imgContainer}>
              <BetterImage
                source={item.avatarImage}
                style={styles.imgSize}
                resizeMode="contain"
              />
            </View>
          )}
          <View style={styles.mgRight14}>
            <TextHealthCare style={{fontSize: 16}} textType="semibold">
              {item.detailTitle}
            </TextHealthCare>
            {item.type === 'share' && (
              <View style={styles.flexRow}>
                <TextHealthCare
                  style={[styles.font16, {color: colors.blue600}]}
                  textType="semibold">
                  {' วราพร '}
                </TextHealthCare>
                <TextHealthCare style={styles.font16} textType="semibold">
                  {'ได้รับการยืนยันแล้ว'}
                </TextHealthCare>
              </View>
            )}
            {item.type === 'appointment' || item.type === 'map' ? (
              <TextHealthCare
                style={[styles.font12, {color: colors.blue600}]}
                textType="semibold">
                {item.detailSubtitle}
              </TextHealthCare>
            ) : null}

            <View style={[styles.flexRow, {alignItems: 'center'}]}>
              <View style={styles.mgRight8}>
                <IconBounceIn
                  image={item.icon}
                  width={horizontalScale(16)}
                  hight={verticalScale(16)}
                  color={colors.greyColorsGrey400}
                />
              </View>

              <TextHealthCare
                style={styles.font12}
                textType="light">{` ${item.date}`}</TextHealthCare>
              <TextHealthCare
                style={styles.font12}
                textType="light">{` · `}</TextHealthCare>
              <TextHealthCare style={styles.font12} textType="light">
                {`10:00 น.`}
              </TextHealthCare>
            </View>
          </View>
          <View>
            {item.type === 'map' ? (
              <View style={styles.buttonContainer}>
                <JustImage
                  tintColor={colors.blue600}
                  source={ImagesIcon.map}
                  style={styles.buttonSize}
                  resizeMode={'contain'}
                />
              </View>
            ) : (
              <BadgeStatus
                title={item.buttonText}
                bgColor={
                  item.buttonColor === 'blue'
                    ? colors.blue50
                    : colors.greenOpacity
                }
                fontColor={
                  item.buttonColor === 'blue' ? colors.blue600 : colors.green
                }
              />
            )}
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ClassicHeader
        headerLeft={<View style={styles.mgLeft24} />}
        headerRight={<CloseRight />}
        title={'$notificationTitle'}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default NotificationScreen
