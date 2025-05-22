import React, {FC} from 'react'
import {Modal, ModalProps, StyleSheet, View} from 'react-native'
import Reanimated from 'react-native-reanimated'

import {colors} from 'configs/theme'

const ReanimatedView = Reanimated.createAnimatedComponent(View)

const ModalHealthCare: FC<ModalProps> = (props: ModalProps): JSX.Element => {
  const {children} = props

  return (
    <Modal {...props} transparent>
      <ReanimatedView style={[styles.modalContainer]}>
        {children}
      </ReanimatedView>
    </Modal>
  )
}

export default ModalHealthCare

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.overlay
  }
})
