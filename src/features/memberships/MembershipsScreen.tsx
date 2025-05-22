import {isEmpty} from 'lodash'
import React, {FC} from 'react'
import {FlatList, ListRenderItem, View} from 'react-native'
import {usePointMemberServices} from 'services'

import {IMemberships} from 'types/features/memberships'

import {ClassicHeader, ListMenu, MemberCard, ProgressBar} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {LottieAnimatedView} from 'features/loading'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'
import {names} from 'constants/name-screen'

import {FormLabel} from './components/MembershipsScreen'
import {MembershipsStyle} from './style/MembershipsScreen'

const MembershipsScreen: FC = () => {
  const IArray = [
    {title: '$numberMember', isIcon: false, img: 0},
    {title: '$historyPoint', isIcon: false, img: 0},
    {title: '$howToAccumulate', isIcon: false, img: 0},
    {title: '$help', isIcon: true, img: Images.more}
  ]
  const {navigate} = useNavigation()
  const {data, isLoading} = usePointMemberServices()

  const Items: ListRenderItem<{
    title: string
    isIcon: boolean
    img: number
    onPress?: () => void
  }> = ({item}) => {
    item.title === '$numberMember' &&
      (item.onPress = () => navigate(names.OrderMemberScreen as never))
    item.title === '$historyPoint' &&
      (item.onPress = () => navigate(names.HistoryPointScreen as never))
    item.title === '$howToAccumulate' &&
      (item.onPress = () => navigate(names.HowToAccumulateScreen as never))
    return (
      <ListMenu
        title={item.title}
        img={item.img}
        isIcon={item.isIcon}
        horizontal={26}
        color={colors.blue600}
        onPress={item.onPress}
      />
    )
  }

  return (
    <>
      <ClassicHeader
        headerLeft={<BackLeft />}
        style={MembershipsStyle.header}
        title="$memberHealthCare"
      />
      <FlatList
        style={MembershipsStyle.container}
        contentContainerStyle={MembershipsStyle.contentContainer}
        showsVerticalScrollIndicator={false}
        data={IArray}
        renderItem={Items}
        ListHeaderComponent={
          isLoading ? (
            <LottieAnimatedView
              exiting={keyframes.fadeOutSize}
              lottiePath={lottie.skeletonMemberCard}
              lottieStyle={skeletionLoadingStyle}
              lottieContainer={skeletionLoadingContainerStyle({
                width: horizontalScale(352),
                marginTop: verticalScale(24),
                marginBottom: verticalScale(44)
              })}
            />
          ) : !isEmpty(data?.data) ? (
            <>
              <View style={MembershipsStyle.top}>
                <MemberCard
                  type={
                    (data ?? {}).data!.tier.toLocaleLowerCase() as IMemberships
                  }
                  // expireDate="ระดับสมาชิกจะสิ้นสุดวันที่ 31 ธ.ค. 2566"
                />
              </View>
              <View style={MembershipsStyle.containerBar}>
                <ProgressBar
                  widthPercentage={(data ?? {}).data!.current_point}
                  colorStart={colors.blue600}
                  colorStop={colors.blue100}
                  progressRadius={0}
                  textLeft={(data ?? {}).data!.tier}
                  textRight={(data ?? {}).data!.next_tier}
                  isRange
                  textLeftStyle={MembershipsStyle.fontLeftBar}
                  textRightStyle={MembershipsStyle.fontRightBar}
                />
              </View>
              <FormLabel
                point={
                  (data ?? {}).data!.maxpoint - (data ?? {}).data!.current_point
                }
              />
            </>
          ) : (
            <></>
          )
        }
      />
    </>
  )
}

export default MembershipsScreen
