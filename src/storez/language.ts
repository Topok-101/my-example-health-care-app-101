import AsyncStorage from '@react-native-async-storage/async-storage'
import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

import {LanguageInfo, LanguageType} from 'types/zustand'

export const useLanguageStore = create<LanguageInfo>()(
  persist(
    set => ({
      language: 'th',
      setLanguage: (val: LanguageType) => {
        set({language: val})
      }
    }),
    {
      name: 'language-store',
      storage: createJSONStorage(() => AsyncStorage) // (optional) by default, 'localStorage' is used
    }
  )
)
