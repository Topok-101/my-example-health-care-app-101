import React from 'react'
import {FlatList, ListRenderItem, View} from 'react-native'

import {IListItems} from 'types/components'

import {ButtonHealthCare, ClassicHeader, ListMenu} from 'components'

import {useNavigation} from '@react-navigation/native'

import {colors} from 'configs/theme'

import {names} from 'constants/name-screen'

import {itemMenu} from './common/ListMenuArray'
import {CardItem, ListDetailUser, UserTitle} from './components/accountScreen'
import {AccountStyle} from './style/accountScreen'
import { useAuthStore } from 'storez/auth'

export default function AccountScreen() {
  const {navigate} = useNavigation()
  const {setLogout} = useAuthStore()

  const ListItems: ListRenderItem<IListItems> = ({item}) => {
    item.title === '$detailUser' &&
      (item.onPress = () => navigate(names.DetailAccountScreen as never))
    item.title === '$setting' &&
      (item.onPress = () => navigate(names.SettingScreen as never))
    item.title === '$memberHealthCare' &&
      (item.onPress = () => navigate(names.MembershipsStack as never))
    return (
      <>
        <ListMenu
          onPress={item.onPress}
          img={item.img}
          color={item.color}
          title={item.title}
          isIcon={item.isIcon}
        />
      </>
    )
  }

  return (
    <>
      <ClassicHeader title="$yourAccount" style={AccountStyle.header} />
      <FlatList
        data={[]}
        renderItem={() => <></>}
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: colors.greyColorsGrey50}}
        ListHeaderComponent={
          <>
            <UserTitle />
            <ListDetailUser />
            <CardItem />
          </>
        }
        ListFooterComponent={
          <>
            <FlatList
              data={itemMenu}
              scrollEnabled={false}
              renderItem={ListItems}
            />
            <View style={AccountStyle.logout}>
              <ButtonHealthCare
                title="$logout"
                fontSize={16}
                onPress={setLogout}
                type={'outline'}
                variant="danger"
              />
            </View>
          </>
        }
      />
    </>
  )
}
