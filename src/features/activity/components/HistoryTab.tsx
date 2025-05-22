import React, {FC} from 'react'
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native'
import FastImage from 'react-native-fast-image'

import {ILoadingProps} from 'types/components/animeted-type'
import {IActivityItems} from 'types/features/activity'

import {Avartar, IconBounceIn, IconWithRactangle, TextHealthCare} from 'components'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {LottieAnimatedView} from 'features/loading'

import {colors} from 'configs/theme'

import {horizontalScale} from 'helper'

import Images from 'assets/image/example'
import Icons from 'assets/image/icons'
import Illustrate from 'assets/image/illustrate'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'

import {ComingTabStyles, HistoryStyles} from '../style'

const MOCK = [
  {
    img: Images.Avatar,
    type: 'doctor',
    isActive: true,
    name: 'นทพญ.ปวีณา ขำดำ',
    description: 'นัดหมายพูดคุย/ปรึกษา',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Images.ex1,
    type: 'clinic',
    isActive: true,
    name: 'BT LAB - Medical Clinic',
    description: 'นัดหมายเข้าตรวจ',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Illustrate.gift,
    type: 'gift',
    isActive: true,
    name: '350',
    description: 'วราพร',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  },
  {
    img: Images.ex1,
    type: 'clinic',
    isActive: true,
    name: 'BT LAB - Medical Clinic',
    description: 'นัดหมายเข้าตรวจ',
    date: '4 พฤศจิกายน 2565 · 10:00 น.'
  }
]

const HistoryTab: FC<ILoadingProps> = ({loading}) => {
  const Items: ListRenderItem<IActivityItems> = ({item}) => {
    const {date, description, img, isActive, name, type} = item
    return (
      <TouchableOpacity activeOpacity={0.5} style={HistoryStyles.subContainer}>
        <View style={HistoryStyles.containerDescription}>
          <View>
            {type === 'gift' ? (
              <TextHealthCare style={HistoryStyles.font16} textType="bold">
                $receiver{' '}
                <TextHealthCare style={HistoryStyles.blue} textType="bold">
                  {name}
                </TextHealthCare>{' '}
                $point
              </TextHealthCare>
            ) : (
              <TextHealthCare style={HistoryStyles.font16} textType="bold">
                {name}
              </TextHealthCare>
            )}

            {type === 'gift' ? (
              <TextHealthCare style={HistoryStyles.font12}>
                $yourShare {'\n'}
                <TextHealthCare style={HistoryStyles.blue}>
                  {description}
                </TextHealthCare>{' '}
                $accept
              </TextHealthCare>
            ) : (
              <TextHealthCare style={HistoryStyles.fontColorBlue}>
                {description}
              </TextHealthCare>
            )}
          </View>
          {type === 'doctor' ? (
            <Avartar
              image={img}
              isActive={isActive}
              sizeImage={44}
              sizeActiveIn={8.25}
              sizeActiveOut={16.5}
            />
          ) : type === 'clinic' ? (
            <FastImage
              source={img}
              style={HistoryStyles.imgClinic}
              resizeMode={'contain'}
            />
          ) : (
            <IconWithRactangle
              source={img as number}
              width={30.94}
              height={30.39}
              heightRounder={44}
              widthRounder={44}
              borderRadius={6}
            />
          )}
        </View>
        <View style={[ComingTabStyles.line, HistoryStyles.line]} />
        <View style={HistoryStyles.containerFooterCard}>
          <View style={HistoryStyles.PIcon}>
            <IconBounceIn
              image={Icons.calendarOutline}
              width={20}
              hight={20}
              color={colors.greyColorsGrey400}
            />
          </View>
          <TextHealthCare style={HistoryStyles.fontColorGray}>
            {' '}
            {date}{' '}
          </TextHealthCare>
          {type === 'gift' ? (
            <TextHealthCare style={HistoryStyles.fontColorBlue}>
              {' '}
              $giftPage{' '}
            </TextHealthCare>
          ) : (
            <TextHealthCare style={HistoryStyles.fontColorBlue}>
              {' '}
              $appointAgain{' '}
            </TextHealthCare>
          )}
          <IconBounceIn
            image={Icons.arrowRight}
            width={12}
            hight={12}
            color={colors.blue600}
          />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <>
      {loading ? (
        <LottieAnimatedView
          exiting={keyframes.fadeOutSize}
          lottiePath={lottie.skeletonHistoryTab}
          lottieStyle={skeletionLoadingStyle}
          lottieContainer={skeletionLoadingContainerStyle({
            width: horizontalScale(327),
            marginHorizontal: horizontalScale(24)
          })}
        />
      ) : (
        <FlatList data={MOCK as []} scrollEnabled={false} renderItem={Items} />
      )}
    </>
  )
}

export default HistoryTab
