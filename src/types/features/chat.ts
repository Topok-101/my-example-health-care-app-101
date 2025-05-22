import {StackScreenProps} from '@react-navigation/stack'

export type RootStackParamList = {
  ChatRoomScreen: {idShareElememt: string}
}

export type PropsChatRoomScreen = StackScreenProps<
  RootStackParamList,
  'ChatRoomScreen',
  'ChatStack'
>
