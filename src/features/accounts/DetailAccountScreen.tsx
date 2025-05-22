import React, {FC} from 'react'
import {ScrollView, TouchableOpacity, View} from 'react-native'
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'

import {ILoadingProps} from 'types/components/animeted-type'

import {Avartar, ClassicHeader, TextHealthCare} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {LottieAnimatedView} from 'features/loading'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/example'
import Icons from 'assets/image/icons'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'

import {BadgeDetailBody, ListProfile} from './components/detailAccountScreen'
import {DetailAccountStyle} from './style/detailAccountScreen'

const MockProfile = [
  {
    editable: false,
    value: 'นาย จิราวัฒน์ แก้วกัน',
    type: 'name',
    img: Icons.userOutline,
    isLeftEmpty: false
  },
  {
    editable: false,
    value: '095 - 391 4956',
    type: 'phone',
    img: Icons.phone,
    isLeftEmpty: false
  },
  {
    editable: false,
    value: 'jirawat@kidmak.studio',
    type: 'email',
    img: Icons.email,
    isLeftEmpty: false
  }
]

const MockAdress = [
  {
    editable: false,
    value: 'บ้าน',
    type: 'name',
    img: Icons.location,
    isLeftEmpty: false
  },
  {
    editable: false,
    value: 'บ้านโมเดิร์นสีเทา',
    type: 'name',
    isLeftEmpty: true
  },
  {
    editable: false,
    value: '178/333 World Club Land หมู่ 7',
    type: 'name',
    isLeftEmpty: true
  },
  {
    editable: false,
    value: 'ตำบล หนองควาย',
    type: 'name',
    isLeftEmpty: true
  },
  {
    editable: false,
    value: 'อำเภอ หางดง',
    type: 'name',
    isLeftEmpty: true
  },
  {
    editable: false,
    value: 'จังหวัด เชียงใหม่',
    type: 'name',
    isLeftEmpty: true
  },
  {
    editable: false,
    value: 'รหัสไปรษณีย์ 50230',
    type: 'name',
    isLeftEmpty: true
  }
]
const DetailAccountScreen: FC<ILoadingProps> = ({loading = false}) => {
  return (
    <>
      <ClassicHeader
        title="บัญชีผู้ใช้"
        headerLeft={<BackLeft />}
        headerRight={
          <TouchableOpacity activeOpacity={0.5}>
            <TextHealthCare style={DetailAccountStyle.headerRight}>
              $edit
            </TextHealthCare>
          </TouchableOpacity>
        }
        style={DetailAccountStyle.header}
      />
      {loading ? (
        <ScrollView>
          <LottieAnimatedView
            exiting={keyframes.fadeOutSize}
            lottiePath={lottie.skeletonDetailAccountScreen}
            lottieStyle={skeletionLoadingStyle}
            lottieContainer={skeletionLoadingContainerStyle({
              marginVertical: verticalScale(28),
              marginHorizontal: horizontalScale(24)
            })}
          />
        </ScrollView>
      ) : (
        <KeyboardAwareFlatList
          style={DetailAccountStyle.container}
          showsVerticalScrollIndicator={false}
          data={[]}
          renderItem={() => <></>}
          ListHeaderComponent={
            <>
              <View style={DetailAccountStyle.containerAvatar}>
                <Avartar image={Images.AvatarU} sizeImage={104} />
              </View>
              <View style={DetailAccountStyle.allContainer}>
                <ListProfile listItems={MockProfile} title={'$priveteDetail'} />
              </View>
            </>
          }
          ListEmptyComponent={
            <View style={DetailAccountStyle.allContainer}>
              <BadgeDetailBody />
            </View>
          }
          ListFooterComponentStyle={[
            DetailAccountStyle.allContainer,
            DetailAccountStyle.btm
          ]}
          ListFooterComponent={
            <ListProfile
              iconColor={colors.greyColorsGrey900}
              listItems={MockAdress}
              title={'$detailAddress'}
            />
          }
        />
      )}
    </>
  )
}
export default DetailAccountScreen
