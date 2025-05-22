import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'

import {IHeaderNumber} from 'types/components/header-type'

import {TextHealthCare} from 'components'
import NumberHealthCare from 'components/typography/NumberHealthCare'

import theme from 'configs/theme/colors'

const HeaderTitleNumber: FC<IHeaderNumber> = ({currentPage, totalPage}) => {
  return (
    <View style={styles.headerContainer}>
      <NumberHealthCare
        number={currentPage}
        textType={'bold'}
        style={{color: theme.color.blue600}}
      />
      <TextHealthCare
        textType={'bold'}
        style={{color: theme.color.greyColorsGrey400}}>
        /
      </TextHealthCare>
      <TextHealthCare
        textType={'bold'}
        style={{color: theme.color.greyColorsGrey400}}>
        {totalPage}
      </TextHealthCare>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row'
    // justifyContent: 'center',
    // alignContent: 'center'
  }
})

export default HeaderTitleNumber
