import React, {FC} from 'react'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps
} from 'react-native-keyboard-aware-scroll-view'
import Animated from 'react-native-reanimated'

export const ScrollViewAware: FC<KeyboardAwareScrollViewProps> = (
  Props: KeyboardAwareScrollViewProps
): JSX.Element => {
  const {children} = Props

  return (
    <KeyboardAwareScrollView {...Props}>{children}</KeyboardAwareScrollView>
  )
}

type Handle<T> = T extends React.ForwardRefExoticComponent<
  React.RefAttributes<infer T2>
>
  ? T2
  : never
ScrollViewAware.displayName = 'ScrollViewAware'
export type IScrollViewAware = Handle<typeof ScrollViewAware>
export const AnimatedScrolling = Animated.createAnimatedComponent(KeyboardAwareScrollView)