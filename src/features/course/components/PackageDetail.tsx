import React from 'react'
import {View} from 'react-native'

import {BetterImage, ButtonHealthCare, TextHealthCare} from 'components'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'

import {names} from 'constants/name-screen'

import {styles} from '../style/PackageDetail.style'

const data = [
  {
    id: 1,
    text: '$detail1'
  },
  {
    id: 2,
    text: '$detail2'
  },
  {
    id: 3,
    text: '$detail3'
  }
]

const PackageDetail = () => {
  const navigation = useNavigation()
  const onClickReserveNow = () => {
    navigation.navigate(
      names.AppointmentStack as never,
      {screen: names.MakeAppointmentScreen} as never
    )
  }
  return (
    <View style={[styles.mainConatiner]}>
      <View style={styles.titleContainer}>
        <TextHealthCare style={styles.text24Grey900} textType="bold">
          $packageName
        </TextHealthCare>
      </View>
      <View style={styles.line} />
      <View style={styles.courseDetailContainer}>
        <TextHealthCare style={styles.text14Grey900} fontType="jm">
          $packDetail
        </TextHealthCare>
      </View>
      <View style={styles.listContainer}>
        {data.map((i, k) => {
          return (
            <View key={k} style={styles.itemContainer}>
              <BetterImage
                source={Images.starFill}
                style={styles.image}
                tintColor={colors.green}
              />
              <TextHealthCare style={styles.text16Grey900}>{i.text}</TextHealthCare>
            </View>
          )
        })}
        <View style={styles.line} />
        <View>
          <View style={styles.priceContainer}>
            <View style={styles.row22}>
              <TextHealthCare
                style={[styles.text32Grey900, {marginRight: 5}]}
                textType="bold">
                $packPrice
              </TextHealthCare>
              <View>
                <TextHealthCare style={styles.text14Grey900} textType="medium">
                  $currency
                </TextHealthCare>
                <TextHealthCare style={styles.text12Grey900} textType="medium">
                  $perPerson
                </TextHealthCare>
              </View>
            </View>
            <View style={styles.textFreeContainer}>
              <TextHealthCare style={styles.textGreen} textType="bold">
                $freeService
              </TextHealthCare>
            </View>
          </View>
          <View style={styles.butttonContainer}>
            <View style={styles.mg8}>
              <ButtonHealthCare
                title="$askChat"
                type="outline"
                fontSize={16}
                size="small"
              />
            </View>
            <View style={{flex: 2}}>
              <ButtonHealthCare
                title="$reserveNow"
                fontSize={16}
                size="small"
                onPress={onClickReserveNow}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PackageDetail
