export type INameSreen =
  | 'LoginScreen'
  | 'OnBoardingScreen'
  | 'SignUpScreen'
  | 'HomeScreen'

export type Navigation = {
  navigate: (value: INameSreen) => void
}
