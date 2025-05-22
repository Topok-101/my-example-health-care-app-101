import React from 'react'
import {FlatList, View} from 'react-native'

import {
  ActiveDoctor,
  ComingActivity,
  HeaderChat,
  ListLatestChat
} from './components/chat-list'
import {ChatScreenStyles} from './styles'

export default function ChatScreen() {
  return (
    <View style={ChatScreenStyles.container}>
      <HeaderChat />
      <FlatList
        data={[]}
        contentContainerStyle={ChatScreenStyles.contentContainerStyle}
        ListHeaderComponent={<ActiveDoctor loading={false} />}
        ListEmptyComponent={<ComingActivity loading={false} />}
        ListFooterComponent={<ListLatestChat loading={false} />}
        renderItem={() => <></>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
