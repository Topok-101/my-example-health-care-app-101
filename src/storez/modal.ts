import {create} from 'zustand'

import {IModalClassic} from 'types/zustand'

export const useModalStore = create<IModalClassic>()(set => ({
  onPress: () => null,
  onCancel: () => null,
  subTitle: '',
  onPressText: '',
  onCancelText: '',
  title: '',
  visible: false,
  setModal: pond => {
    const {
      visible,
      goTo,
      image,
      onCancel,
      onCancelText,
      onPress,
      onPressText,
      subTitle,
      title
    } = pond
    set({
      visible,
      goTo,
      image,
      onCancel,
      onCancelText,
      onPress,
      onPressText,
      subTitle,
      title
    })
  }
}))
