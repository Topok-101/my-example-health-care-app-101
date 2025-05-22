import React from 'react'

import {useLoadingStore} from 'storez'

import {ModalHealthCare} from 'components/modal'

import {lottie} from 'assets/lottie'

import LottieView from './LottieView'

export default function LoadingEntireScreen() {
  const {loading} = useLoadingStore()
  return (
    <ModalHealthCare animationType="fade" visible={loading}>
      <LottieView lottiePath={lottie.threeDotLoading} />
    </ModalHealthCare>
  )
}
