import { withSequence, withSpring, withTiming } from "react-native-reanimated"

const animatedChangeSignUpStep =(prevStep:number,currentStep:number)=>{
    const entering = () => {
        'worklet'
    
        const animations = {
        //   opacity: withTiming(1, {duration: 500}),
          transform: [
            {
              translateX:withSpring(0)
            }
          ],
        }
    
        const initialValues = {
        //   opacity: 0,
          transform: [{translateX:prevStep < currentStep ? 400 : -400}]
        }
    
        return {
          initialValues,
          animations
        }
      }
      const exiting = () => {
        'worklet'
        
        const animations = {
            opacity: withTiming(0, {duration: 250}),
            transform: [
              {
                translateY:withSequence(
                    withTiming(100,{duration: 250}),
                    withTiming(1000,{duration: 500})
                ) 
              },
              { scale: withTiming(.8, { duration: 100 }) }
            ],
          }
        //   prevStep < 2 ? 200 : -200
          const initialValues = {
            opacity: 1,
            transform: [{translateY:0},{scale:1}]
          }
    
        return {
          initialValues,
          animations
        }
      }
      return {entering,exiting}
}

export {animatedChangeSignUpStep}