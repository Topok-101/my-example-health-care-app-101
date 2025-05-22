import {create} from 'zustand'

import {ILoading} from 'types/zustand'

export const useLoadingStore = create<ILoading>()(set => ({
  loading: false,
  setLoading: (val: boolean) => {
    set({loading: val})
  }
}))
