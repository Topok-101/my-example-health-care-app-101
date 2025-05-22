import {isEmpty} from 'lodash'
import React, {FC} from 'react'
import {Dimensions, TouchableOpacity, View} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import {CarouselRenderItem} from 'react-native-reanimated-carousel/lib/typescript/types'

import {
  DataTypeServicesHome,
  IResponseDoctorHome
} from 'types/services/services-home'

import {BetterImage, ButtonHealthCare, TextHealthCare} from 'components'

import {
  skeletionLoadingContainerStyle,
  skeletionLoadingStyle
} from 'features/GlobalStyles'
import {styles} from 'features/home/style/carousel/HealthPackage.style'
import {LottieAnimatedView} from 'features/loading'

import {useNavigation} from '@react-navigation/native'

import {horizontalScale, verticalScale} from 'helper'

import Illustrate from 'assets/image/illustrate'
import {lottie} from 'assets/lottie'

import {keyframes, namesScreen} from 'const'

const PAGE_WIDTH = Dimensions.get('window').width

const HealthPackage: FC<{
  data: IResponseDoctorHome
  isLoading: boolean
  isSuccess: boolean
}> = ({data, isLoading, isSuccess}) => {
  const initialData: DataTypeServicesHome[] = [
    {
      clinicId: 0,
      serviceId: 0,
      serviceName: '',
      image: Illustrate.worker
    },
    {
      clinicId: 0,
      serviceId: 0,
      serviceName: '',
      image: Illustrate.lover
    },
    {
      clinicId: 0,
      serviceId: 0,
      serviceName: '',
      image: Illustrate.family
    }
  ]

  const navigation = useNavigation()
  const [getState, setState] = React.useState(initialData)

  React.useEffect(() => {
    mapData()
  }, [isLoading])

  const navigate = () => {
    navigation.navigate(
      namesScreen.CourseStack as never,
      {screen: namesScreen.CourseDetailScreen} as never
    )
  }

  const mapData = () => {
    if (isSuccess) {
      setState(items =>
        items.map((item, index) => ({
          ...item,
          clinicId: data?.data[index].clinicId,
          serviceId: data?.data[index].serviceId,
          serviceName: data?.data[index].serviceName
        }))
      )
    }
  }

  const renderItem: CarouselRenderItem<DataTypeServicesHome> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.carouselContainer}
        activeOpacity={0.5}
        onPress={navigate}>
        <BetterImage
          style={styles.imageStyle}
          resizeMode="contain"
          source={item.image}>
          <View style={styles.subContainer}>
            <TextHealthCare
              textType="bold"
              style={styles.titleText}
              numberOfLines={3}>
              {item.serviceName}
            </TextHealthCare>
            <View style={styles.buttonConatiner}>
              <ButtonHealthCare title="$moreInfo" fontSize={12} size="small" />
            </View>
          </View>
        </BetterImage>
      </TouchableOpacity>
    )
  }

  return isLoading ? (
    <LottieAnimatedView
      exiting={keyframes.fadeOutSize}
      lottieContainer={skeletionLoadingContainerStyle({
        width: horizontalScale(327),
        marginTop: verticalScale(24)
      })}
      lottieStyle={skeletionLoadingStyle}
      lottiePath={lottie.skeletonHealthPackage}
      autoplay
      loop
    />
  ) : !isEmpty(data?.data) ? (
    <View>
      <TextHealthCare textType="bold" style={styles.title}>
        $healthPackage
      </TextHealthCare>
      <Carousel
        vertical={false}
        width={PAGE_WIDTH}
        height={verticalScale(227)}
        style={{
          width: PAGE_WIDTH
        }}
        loop
        autoPlay
        autoPlayInterval={3000}
        data={getState}
        renderItem={renderItem}
      />
    </View>
  ) : (
    <></>
  )
}

export default HealthPackage
