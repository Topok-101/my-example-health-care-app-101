import AsyncStorage from '@react-native-async-storage/async-storage'
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

import {DataTypeAuth} from 'types/services/auth'

type IFirebaseStore =
  | FirebaseAuthTypes.UserCredential
  | FirebaseAuthTypes.User
  | null
  | string
  | FirebaseAuthTypes.AdditionalUserInfo
  | object

interface IAuth {
  userToken: DataTypeAuth
  userFirebase: IFirebaseStore
  setItemUser: (pond: DataTypeAuth) => void
  setSetItemUserFirebase: (pond: IFirebaseStore) => void
  setLogout: () => void
}

export const useAuthStore = create<IAuth>()(
  persist(
    set => ({
      userToken: {accessToken: '', refreshToken: '', email: '', iduser: 0},
      userFirebase: null,
      setItemUser: pond => {
        set({userToken: pond})
      },
      setSetItemUserFirebase: pond => {
        set({userFirebase: pond})
      },
      setLogout: async () => {
        auth().currentUser && (await auth().signOut())
        set({
          userFirebase: null,
          userToken: {accessToken: '', refreshToken: '', email: '', iduser: 0}
        })
        await AsyncStorage.clear()
      }
    }),
    {
      name: 'auth-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
      version: 1,
      onRehydrateStorage: _ => {
        // console.log('hydration starts')

        // optional
        return (_, error) => {
          if (error) {
            // console.log('an error happened during hydration', error)
          } else {
            // console.log('hydration finished')
          }
        }
      }
    }
  )
)