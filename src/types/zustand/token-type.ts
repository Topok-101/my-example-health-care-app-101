import {FirebaseAuthTypes} from '@react-native-firebase/auth'

import {DataTypeAuth} from 'types/services/auth'

export interface ITokenUserCredential {
  user?:
    | FirebaseAuthTypes.UserCredential
    | FirebaseAuthTypes.User
    | null
    | string
    | FirebaseAuthTypes.AdditionalUserInfo
    | object
  userToken?: DataTypeAuth
}
export interface IToken extends ITokenUserCredential {
  loading?: boolean
  setItemUser?: (pond: ITokenUserCredential) => void
  onLogout?: () => void
}
