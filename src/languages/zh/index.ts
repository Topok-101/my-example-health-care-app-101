import error from 'languages/th/error'
import accounts from './accounts'
import activity from './activity'
import appointment from './appointment'
import auth from './auth'
import changePassword from './changePassword'
import chat from './chat'
import clinic from './clinic'
import course from './courseDetail'
import forgetPasswordFeature from './forgetPasswordFeature'
import global from './global'
import hello from './hello'
import memberShip from './memberShip'
import modal from './modal'
import onBoardingFeature from './onBoardingFeature'
import point from './point'
import setting from './setting'
import signUpFeature from './signUpFeature'

const zh = {
  ...global,
  ...onBoardingFeature,
  ...signUpFeature,
  ...auth,
  ...modal,
  ...forgetPasswordFeature,
  ...clinic,
  ...hello,
  ...appointment,
  ...accounts,
  ...setting,
  ...changePassword,
  ...point,
  ...memberShip,
  ...activity,
  ...course,
  ...chat,
  ...error
}

export default zh
