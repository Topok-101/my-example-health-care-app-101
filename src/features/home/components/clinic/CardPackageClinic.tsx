import React from 'react'
import {TouchableOpacity, View} from 'react-native'

import {ICardPackageClinic} from 'types/features'

import {BetterImage, JustImage, TextHealthCare} from 'components'

import {stylesCardPackage} from 'features/home/style/clinic'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

import Images from 'assets/image/icons'

const CardPackageClinic: React.FC<ICardPackageClinic> = (
  props: ICardPackageClinic
): JSX.Element => {
  const {Image, title, Descriptions, isReadMore} = props

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={stylesCardPackage(13).paddingB}
        activeOpacity={0.5}>
        {Image ? (
          <BetterImage
            source={typeof Image === 'string' ? {uri: Image} : Image}
            style={stylesCardPackage().Img}
            resizeMode={'cover'}
          />
        ) : (
          <View style={stylesCardPackage().Img} />
        )}
      </TouchableOpacity>

      {title && (
        <View style={[stylesCardPackage(8).paddingB]}>
          <TextHealthCare
            textType="bold"
            style={{fontSize: moderateScale(16)}}
            numberOfLines={2}
            ellipsizeMode="tail">
            {title}
          </TextHealthCare>
        </View>
      )}

      {Descriptions && (
        <View style={[stylesCardPackage(18).paddingB]}>
          <TextHealthCare
            style={stylesCardPackage().fontDescrip}
            numberOfLines={3}
            ellipsizeMode="tail">
            {Descriptions}
          </TextHealthCare>
        </View>
      )}

      {isReadMore && (
        <TouchableOpacity
          style={stylesCardPackage().containerReadmore}
          activeOpacity={0.5}>
          <TextHealthCare
            style={{fontSize: moderateScale(12), color: colors.blue600}}>
            $readMore
          </TextHealthCare>

          <View style={{justifyContent: 'center'}}>
            <JustImage
              source={Images.chevronRight}
              style={stylesCardPackage().iconReadmore}
              tintColor={colors.blue600}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default CardPackageClinic
