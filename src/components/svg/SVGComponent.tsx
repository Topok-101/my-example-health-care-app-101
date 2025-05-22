import {Canvas, DataSource, ImageSVG, useSVG} from '@shopify/react-native-skia'
import React from 'react'

const CardBeginnerMember: React.FC<{
  source: DataSource
  width: number
  height: number
  children?: React.ReactNode
}> = props => {
  const {source, height, width,children} = props
  const svg = useSVG(source)

  return (
    <>
      <Canvas style={{width: width, height: height}}>
        {svg && (
          <ImageSVG svg={svg} x={0} y={0} width={width} height={height} >
            {children}
          </ImageSVG>
        )}
      </Canvas>
    </>
  )
}

export default CardBeginnerMember
