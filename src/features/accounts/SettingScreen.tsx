import React, {Dispatch, SetStateAction} from 'react'
import {Switch, View} from 'react-native'

import {ClassicHeader, ListMenu, TextHealthCare} from 'components'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'

import {names} from 'constants/name-screen'
import { SettingScreenStyles } from './style/settingScreen/SettingScreen.style'

export default function SettingScreen() {
  const {navigate} = useNavigation()
  const [IsNotification, setIsNotification] = React.useState<boolean>(false)
  const [IsNotificationMessege, setIsNotificationMessege] =
    React.useState<boolean>(false)

  const onNavigate = () => {
    navigate(names.ChangePasswordScreen as never)
  }

  const Items: React.FC<{
    onChange: Dispatch<SetStateAction<boolean>>
    value: boolean
    title: string
  }> = props => {
    return (
      <View style={SettingScreenStyles.subcontainerTop}>
        <TextHealthCare style={SettingScreenStyles.text} textType="medium">
          {props.title}
        </TextHealthCare>
        <Switch
          value={props.value}
          trackColor={{true: colors.blue600, false: colors.greyColorsGrey200}}
          onValueChange={props.onChange}
          style={SettingScreenStyles.switch}
        />
      </View>
    )
  }

  const Title: React.FC<{title: string}> = props => {
    return (
      <TextHealthCare style={[SettingScreenStyles.text, SettingScreenStyles.containerTxt]} textType="medium">
        {props.title}
      </TextHealthCare>
    )
  }

  return (
    <View style={SettingScreenStyles.container}>
      <ClassicHeader
        headerLeft={<BackLeft />}
        title={'$setting'}
        style={SettingScreenStyles.header}
      />
      <Title title="$settingNotification" />
      <Items
        title="$settingAppointment"
        value={IsNotification}
        onChange={setIsNotification}
      />
      <View style={SettingScreenStyles.line} />
      <Items
        title="$settingMessege"
        value={IsNotificationMessege}
        onChange={setIsNotificationMessege}
      />
      <Title title="$editPassword" />
      <ListMenu
        title={'$changePassword'}
        img={Images.password}
        color={colors.blue600}
        onPress={onNavigate}
      />
    </View>
  )
}