import {isEmpty} from 'lodash'
import React, {FC} from 'react'
import {SectionList, View} from 'react-native'
import {usePointMemberDetailServices} from 'services'

import {IMemberships} from 'types/features/memberships'

import {ClassicHeader, ListMenu} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {LottieAnimatedView} from 'features/loading'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'
import {lottie} from 'assets/lottie'

import {keyframes} from 'const'

import {CardTitle, DetailMemberList} from './components/TierMemberScreen'
import {TierMemberScreenStyles} from './style/TierMemberScreen'

const TierMemberScreen: FC = () => {
  const {data, isLoading} = usePointMemberDetailServices()

  const LoaderView = () => {
    return (
      <LottieAnimatedView
        exiting={keyframes.fadeOutSize}
        lottiePath={lottie.skeletonTierMemberScreen}
        lottieStyle={skeletionLoadingStyle}
        lottieContainer={skeletionLoadingContainerStyle({
          width: horizontalScale(345),
          marginTop: verticalScale(16),
          marginHorizontal: horizontalScale(15)
        })}
      />
    )
  }

  return (
    <>
      <ClassicHeader
        headerLeft={<BackLeft />}
        title="$numberMember"
        style={{backgroundColor: colors.white}}
      />
      {isLoading ? (
        <>
          <LoaderView />
          <LoaderView />
        </>
      ) : !isEmpty(data?.data) ? (
        <SectionList
          sections={data?.data as any}
          renderItem={({item}) => {
            return (
              <View style={TierMemberScreenStyles.subContainer}>
                <DetailMemberList data={item} />
              </View>
            )
          }}
          style={TierMemberScreenStyles.container}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section}) => (
            <CardTitle
              rate={section.title.rate}
              title={section.title.title}
              type={section.title.type as IMemberships}
            />
          )}
          ListFooterComponentStyle={TierMemberScreenStyles.footer}
          ListFooterComponent={
            <ListMenu
              title={'$learnMore'}
              img={Images.more}
              color={colors.blue600}
              isChevronRight={false}
              // onPress={}
            />
          }
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default TierMemberScreen
