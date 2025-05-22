import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import {CarouselRenderItem} from 'react-native-reanimated-carousel/lib/typescript/types'

import {
  DataTypeClinicService,
  IResponseClinicService
} from 'types/services/clinic'

import {BetterImage, TextHealthCare} from 'components'

import {stylesService} from 'features/home/style/clinic'

import {colors} from 'configs/theme'

import {horizontalScale, verticalScale} from 'helper'
import { useNavigation } from '@react-navigation/native'
import { namesScreen } from 'const'

const Service: React.FC<IResponseClinicService> = (props): JSX.Element => {
  const {data} = props
  const navigation = useNavigation()
  
  const navigates = () => {
    navigation.navigate(
      namesScreen.CourseStack as never,
      {screen: namesScreen.CourseDetailScreen} as never
    )
  }

  const ItemRender: CarouselRenderItem<DataTypeClinicService> = ({item}) => {
    return (
      <TouchableOpacity
        style={{paddingStart: horizontalScale(24)}}
        activeOpacity={0.5}
        onPress={navigates}
        >
        {item.imagePath ? (
          <BetterImage
            source={{uri: item.imagePath}}
            style={stylesService.img}
            resizeMode={'cover'}
          />
        ) : (
          <View style={stylesService.img} />
        )}
        <View style={{paddingTop: verticalScale(8)}}>
          <TextHealthCare
            textType="medium"
            style={{color: colors.greyColorsGrey700}}
            numberOfLines={1}>
            {item.service_name}
          </TextHealthCare>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <TextHealthCare textType="medium" style={stylesService.titelContent}>
        $serviceClinic
      </TextHealthCare>
      <Carousel
        vertical={false}
        width={horizontalScale(416 / 3)}
        height={verticalScale(128)}
        style={{
          width: horizontalScale(416),
          justifyContent: 'center'
        }}
        data={data}
        renderItem={ItemRender}
      />
    </View>
  )
}

export default Service
