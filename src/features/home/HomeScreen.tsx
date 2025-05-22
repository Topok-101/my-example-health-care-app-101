import React from 'react'
import {FlatList, RefreshControl, View} from 'react-native'
import Animated, {useSharedValue} from 'react-native-reanimated'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

// import useInfiniteScroll from 'hooks/use-infinite-scroll'
import {SearchBar} from 'components'

import {colors} from 'configs/theme'

// import {useGetTestDataQuery} from 'services/rtkExample'
import {horizontalScale, verticalScale} from 'helper'

import {onScrolling} from './animations/scrollHome'
import {ApiHomeScreen} from './api'
import {Appointment, HelloCard, Point} from './components/card'
import {Doctor, HealthPackage, RecommendPackage} from './components/carousel'
import {BackToTop, ClinicMain} from './components/clinic'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

export default function HomeScreen() {
  // const {combinedData, readMore, isFetching, refresh} = useInfiniteScroll(
  //   useGetTestDataQuery,
  //   {size: 10}
  // )
  const {
    contextAppointmentService,
    contextServicesHome,
    contextDoctor,
    contextPointMember
  } = ApiHomeScreen()

  const {top} = useSafeAreaInsets()
  const translationY = useSharedValue(0)

  const arefT1 = React.useRef<Animated.View>(null)
  const arefT2 = React.useRef<Animated.View>(null)
  const flatListRef = React.useRef<FlatList>(null)

  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  const [alreadyRenderT1, setAlreadyRenderT1] = React.useState<boolean>(false)
  const [alreadyRenderT2] = React.useState<boolean>(false)

  const {scrollHandler, onPressTouch, enteringOpa, stylesAnimatedPaddingTop} =
    onScrolling({
      translationY,
      top,
      ref: flatListRef,
      alreadyRenderT1,
      alreadyRenderT2,
      refT1: arefT1,
      refT2: arefT2
    })

  const onRefresh = React.useCallback(() => {
    let timer = 0
    timer !== null && clearTimeout(timer)
    setRefreshing(true)
    // refresh
    contextAppointmentService.refetch()
    contextServicesHome.refetch()
    contextDoctor.refetch()
    contextPointMember.refetch()
    // refresh
    timer = setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <AnimatedFlatList
        ref={flatListRef}
        data={[1]}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: top
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        // onEndReached={readMore}
        onEndReachedThreshold={0.5}
        renderItem={() => (
          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1
            }}
            onLayout={() => setAlreadyRenderT1(true)}
            ref={arefT1}>
            <HelloCard />
            <View
              style={{width: '100%', paddingHorizontal: horizontalScale(24)}}>
              <SearchBar isScanner={true} />
            </View>
            <Appointment
              data={(contextAppointmentService ?? {}).data!}
              isLoading={contextAppointmentService.isLoading}
            />
            <Point
              data={(contextPointMember ?? {}).data!}
              isLoading={contextPointMember.isLoading}
            />
            <View style={{flex: 1}}>
              <HealthPackage
                data={(contextServicesHome ?? {}).data!}
                isLoading={contextServicesHome.isLoading}
                isSuccess={contextServicesHome.isSuccess}
              />
            </View>
            <View style={{flex: 1}}>
              <Doctor
                data={(contextDoctor ?? {}).data!}
                isLoading={contextDoctor.isLoading}
              />
            </View>
            <View style={{flex: 1, marginBottom: verticalScale(26)}}>
              <RecommendPackage />
            </View>
          </Animated.View>
        )}
        ListFooterComponent={
          <Animated.View
            entering={enteringOpa}
            style={stylesAnimatedPaddingTop}>
            <ClinicMain
              data={[]}
              translationY={translationY}
              isRefresh={refreshing}
            />
            <BackToTop isFetching={false} onPress={onPressTouch} />
          </Animated.View>
        }
        refreshControl={
          <RefreshControl
            enabled
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
      {/* {IsFocused && (
        <Animated.View
          entering={enteringOpa}
          style={[stylesAnimated]}
          ref={arefT2}
          onLayout={() => setAlreadyRenderT2(true)}>
          <HeaderClinic />
        </Animated.View>
      )} */}
    </View>
  )
}
