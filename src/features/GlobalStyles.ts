const skeletionLoadingContainerStyle = (layout: {
  width?: number
  height?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginBottom?: number
  paddingVertical?: number
  paddingHorizontal?: number
  marginVertical?: number
  marginHorizontal?: number
}) => {
  return {
    ...layout
  }
}

const skeletionLoadingStyle = {
  width: '100%'
}

export {skeletionLoadingContainerStyle, skeletionLoadingStyle}
