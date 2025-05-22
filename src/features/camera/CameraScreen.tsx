import React from 'react'
import {Alert, StyleSheet, View} from 'react-native'
import {CameraScreen as CameraScreens} from 'react-native-camera-kit'

import {colors} from 'configs/theme'

export default function CameraScreen() {
  return (
    <View style={styles.cameraContainer}>
      <CameraScreens
        scanBarcode={true}
        onReadCode={event => Alert.alert(event.nativeEvent.codeStringValue)}
        cameraRatioOverlay={undefined}
        captureButtonImage={undefined}
        captureButtonImageStyle={{backgroundColor: 'transparent'}}
        cameraFlipImage={undefined}
        cameraFlipImageStyle={{backgroundColor: 'transparent'}}
        hideControls={true}
        showFrame={false}
        laserColor={'transparent'}
        frameColor={'transparent'}
        torchOnImage={undefined}
        torchOffImage={undefined}
        torchImageStyle={{backgroundColor: 'transparent'}}
        onBottomButtonPressed={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: colors.black
  }
})
