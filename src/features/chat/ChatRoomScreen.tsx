import React from 'react'
import {ListRenderItem} from 'react-native'
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'
import {SafeAreaView} from 'react-native-safe-area-context'

import {PropsChatRoomScreen} from 'types/features/chat'

import {horizontalScale, verticalScale} from 'helper'

import {
  ChatGrid,
  HeaderChatRoom,
  TextAreaChat,
  WelcomeCard
} from './components/chat-room'
import {ChatScreenStyles} from './styles'

const ChatRoomScreen = ({route}: PropsChatRoomScreen) => {
  // const {idShareElememt} = route.params

  const MOCKCHA = [
    {
      isMyMessage: true,
      message: 'มีครับ ผมกินพารา'
    },
    {
      isMyMessage: false,
      message: 'ผมรู้สึกไม่สบายตัวตั้งแต่เมื่อคืน'
    },
    {
      isMyMessage: false,
      message: 'ผมรู้สึกไม่สบายตัวตั้งแต่เมื่อคืน'
    },
    {
      isMyMessage: false,
      message: 'ผมรู้สึกไม่สบายตัวตั้งแต่เมื่อคืน'
    },
    {
      isMyMessage: true,
      message: 'มีครับ ผมกินพารา'
    }
  ]

  const [messegeChat, setMessegeChat] = React.useState(MOCKCHA)
  const [heightTextArea, setHeightTextArea] = React.useState<number>(0)

  const refFlatChat = React.useRef<KeyboardAwareFlatList>(null)

  React.useEffect(() => {
    keepGoingEndScreen()
  }, [])

  const keepGoingEndScreen = () => {
    refFlatChat.current?.scrollToEnd(true)
  }

  const onMessege = (item: {isMyMessage: boolean; message: string}) => {
    setMessegeChat(prev => [...prev, item])
    keepGoingEndScreen()
  }

  const onLayoutChat = (value: number) => {
    setHeightTextArea(value)
  }

  const RenderItems: ListRenderItem<{
    isMyMessage: boolean
    bacgroundColor?: string
    message: string
    isTyping?: boolean
  }> = ({item}) => {
    return <ChatGrid isMyMessege={item.isMyMessage} messege={item.message} />
  }

  return (
    <>
      <SafeAreaView style={ChatScreenStyles.contentChatRoomStyle}>
        <>
          <HeaderChatRoom
            idElement={
              route.params ? route.params.idShareElememt : ''
            }
          />
          <WelcomeCard />
        </>
        <KeyboardAwareFlatList
          data={messegeChat}
          ref={refFlatChat}
          renderItem={RenderItems}
          contentContainerStyle={{
            justifyContent: 'flex-end',
            flexGrow: 1,
            paddingBottom: verticalScale(heightTextArea + 20),
            paddingHorizontal: horizontalScale(24)
          }}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="interactive"
          automaticallyAdjustContentInsets={false}
          contentInsetAdjustmentBehavior="never"
          maintainVisibleContentPosition={{
            minIndexForVisible: 0,
            autoscrollToTopThreshold: 100
          }}
          automaticallyAdjustKeyboardInsets={true}
        />
        <TextAreaChat MessageMap={onMessege} heightMeasure={onLayoutChat} />
      </SafeAreaView>
    </>
  )
}

export default ChatRoomScreen
