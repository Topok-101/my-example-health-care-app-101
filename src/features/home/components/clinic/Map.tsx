import React from 'react'
import {FlatList, Linking, ListRenderItem, View, useWindowDimensions} from 'react-native'
import MapView, {Marker, Region} from 'react-native-maps'

import {IItemBtn} from 'types/features'

import {
  AnimatedFastImage,
  ButtonHealthCare,
  IconWithRounder,
  TextHealthCare
} from 'components'

import {stylesMap} from 'features/home/style/clinic'

import {colors} from 'configs/theme'

import {horizontalScale, moderateScale, verticalScale} from 'helper'

import Images from 'assets/image/icons'

const itemBtn = [
  {text: '$call', type: 'outline', style: {}},
  {
    text: '$chatWithStaff',
    type: 'outline',
    style: {marginHorizontal: horizontalScale(12)}
  },
  {text: '$booking', type: 'primary', style: {}}
]

const ONE_LATITUDE_DEGREE_IN_METERS = 111.32 * 1000

const Map: React.FC<{
  lat: number
  long: number
  address: string
  phone: string
}> = (props): JSX.Element => {
  const {address, lat, long, phone} = props
  const LATITUDE = lat//18.72431913468061
  const LONGTITUDE = long//98.94948518999277

  const {width} = useWindowDimensions()
  const [initialRegion, setInitialRegion] = React.useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  })

  React.useEffect(() => {
    onRegionChange()
  }, [])

  const onRegionChange = () => {
    const accuracy = width / 2
    const latitudeDelta = accuracy / ONE_LATITUDE_DEGREE_IN_METERS
    const longitudeDelta =
      accuracy /
      (ONE_LATITUDE_DEGREE_IN_METERS * Math.cos(LATITUDE * (Math.PI / 180)))

    setInitialRegion({
      latitude: LATITUDE,
      longitude: LONGTITUDE,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta
    })
  }

  const onPress = (type: string) => {
    type === '$call' && Linking.openURL(`tel:${phone}`)
  }

  const ItemBtn: ListRenderItem<IItemBtn> = ({item}): JSX.Element => {
    return (
      <ButtonHealthCare
        fontSize={moderateScale(12)}
        title={item.text}
        size="small"
        type={item.type}
        containerStyle={item.style}
        onPress={() => onPress(item.text)}
      />
    )
  }

  return (
    <View>
      <View style={stylesMap.containerTitle}>
        <View>
          <TextHealthCare
            textType="medium"
            style={{
              fontSize: moderateScale(16),
              color: colors.greyColorsGrey900
            }}>
            $mapClinic
          </TextHealthCare>
          <TextHealthCare style={stylesMap.subText}>
            {address}
          </TextHealthCare>
        </View>
        <IconWithRounder
          heightRounder={48}
          widthRounder={48}
          source={Images.map}
          iconColor={colors.blue600}
          height={24}
          width={24}
        />
      </View>
      <View style={stylesMap.containerMap}>
        <MapView
            // provider={PROVIDER_GOOGLE} //<-- if need google map
          style={stylesMap.map}
          region={initialRegion}
          onRegionChange={onRegionChange}
          zoomEnabled={false}
          zoomTapEnabled={false}
          zoomControlEnabled={false}
          scrollEnabled={false}>
          <Marker
            coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude
            }}>
            <View style={stylesMap.containerMarker}>
              <AnimatedFastImage
                source={Images.locationBold}
                tintColor={colors.blue500}
                style={stylesMap.markerIcon}
              />
            </View>
          </Marker>
        </MapView>
      </View>

      <FlatList
        data={itemBtn as []}
        horizontal
        renderItem={ItemBtn}
        scrollEnabled={false}
        contentContainerStyle={{paddingTop: verticalScale(16)}}
      />
    </View>
  )
}

export default Map
