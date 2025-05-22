import React from 'react'
import {FlatList, ListRenderItem, View} from 'react-native'

import {BetterImage, ButtonHealthCare, TextHealthCare} from 'components'

import {styles} from 'features/home/style/carousel/RecommendPackage.style'

import {useNavigation} from '@react-navigation/native'

import Background from 'assets/image/background'

import {names} from 'constants/name-screen'

const RecommendPackage = () => {
  const navigate = useNavigation()
  const dataNew = [
    {
      id: 1,
      title: 'หมั่นสวมหน้ากาก\nเพื่อป้องกันโควิด-19',
      desc: '',
      image: Background.worldMask,
      buttonText: 'แพ็คเกจการตรวจ COVID-19',
      onPress: () => null
    },
    {
      id: 2,
      title: 'บริการตรวจสุขภาพ\nถึงหน้าบ้าน',
      desc: 'เพื่อความสะดวกสบาย\nตามไลฟ์สไตล์ของทุกท่าน',
      image: Background.checkup,
      buttonText: 'นัดหมายการตรวจสุขภาพ',
      onPress: () =>
        navigate.navigate(
          names.AppointmentStack as never,
          {screen: names.MakeAppointmentScreen} as never
        )
    }
  ]

  const renderItemNew: ListRenderItem<any> = ({item}) => {
    return (
      <View style={styles.carouselContainer}>
        <BetterImage
          resizeMode="cover"
          source={item.image}
          style={styles.imageStyle}>
          <View style={styles.textConatiner}>
            <TextHealthCare textType="bold" style={styles.titleText}>
              {item.title}
            </TextHealthCare>
            <TextHealthCare textType="medium" style={styles.descText}>
              {item.desc}
            </TextHealthCare>
            <View style={styles.buttonConatiner}>
              <ButtonHealthCare
                title={item.buttonText}
                fontSize={12}
                size="small"
                onPress={item.onPress}
              />
            </View>
          </View>
        </BetterImage>
      </View>
    )
  }
  return (
    <View>
      <FlatList
        data={dataNew}
        renderItem={renderItemNew}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default RecommendPackage
