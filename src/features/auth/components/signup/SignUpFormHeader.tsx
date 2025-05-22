import React, {FC} from 'react'
import {View} from 'react-native'

import {IHeaderSignUpProps} from 'types/components/header-type'

import {TextHealthCare} from 'components'

import {signUpFormStyles} from 'features/auth/style/signup.style'

import {colors} from 'configs/theme'

import {moderateScale} from 'helper'

const FormHeader: FC<IHeaderSignUpProps> = ({
  headerTitle,
  subHeader = '',
  customSubheader
}) => {
  return (
    <View style={[signUpFormStyles.signUpFormHeaderContainer]}>
      <TextHealthCare textType="bold" style={{fontSize: moderateScale(24)}}>
        {headerTitle}
      </TextHealthCare>
      {customSubheader ?? (
        <TextHealthCare
          style={{
            fontSize: moderateScale(16),
            color: colors.greyColorsGrey400
          }}>
          {subHeader}
        </TextHealthCare>
      )}
    </View>
  )
}

export default FormHeader
