
import { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated"

const useScrollingAnimate =(firstContainerPos:number,seccondContanerPos:number,firstPaddingSpaceImage:number,seccondPaddingSpaceImage:number)=>{
   
  const cardOffSet  = useSharedValue(0)
  
  const firstCardOppacityAnimatedStyle = useAnimatedStyle(( )=> {
    'worklet'

    const newValue = (100-((cardOffSet.value*100) / firstContainerPos))/100
    const val = newValue >=0 ? newValue :0

    return {
      opacity:val
    }
  })

  const firstCardPositionAnimatedStyle = useAnimatedStyle(() => {
    'worklet'

    const offset = cardOffSet.value >= 0 ? cardOffSet.value  : 0
    const interVal = firstPaddingSpaceImage - offset
    
    return {
      paddingTop: 
      interpolate(
        interVal,
        [0,firstPaddingSpaceImage],
        [0, firstPaddingSpaceImage],
        Extrapolate.CLAMP
      ),
    }
  })

  const seccondCardOppacityAnimatedStyle = useAnimatedStyle(( )=> {
    'worklet'

    let per = 0
    if (cardOffSet.value >=seccondContanerPos/2  ) {
      per = cardOffSet.value - seccondContanerPos/2
    }
   
    const newValue =  cardOffSet.value >=seccondContanerPos/2   ? 1-(per/150) : 1
    const val = newValue >=0 ? newValue  :0

    return {
      opacity:val
    }
  })

  const seccondCardPositionAnimatedStyle = useAnimatedStyle(() => {
    'worklet'
    
    return {
      paddingTop: 
      interpolate(
        cardOffSet.value >=seccondContanerPos/2 ?  cardOffSet.value -seccondContanerPos/2  :0,
        [0,seccondPaddingSpaceImage],
        [seccondPaddingSpaceImage,50],
        Extrapolate.CLAMP
      ),
     
    }
  })
  
   
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      cardOffSet.value = e.contentOffset.y
    },
  })

  return {scrollHandler,firstCardOppacityAnimatedStyle,firstCardPositionAnimatedStyle,seccondCardOppacityAnimatedStyle,seccondCardPositionAnimatedStyle}
}

export {useScrollingAnimate}