import {appleAuth} from '@invertase/react-native-apple-authentication'
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
import {
  ConfigureParams,
  GoogleSignin
} from '@react-native-google-signin/google-signin'
import {env} from 'configs'
import {Platform} from 'react-native'
import {
  AccessToken,
  AuthenticationToken,
  LoginManager,
  Settings
} from 'react-native-fbsdk-next'
import {sha256} from 'react-native-sha256'

class AuthSocial {
  /**
   * googleAuth
   */
  public async googleAuth() {
    const config: ConfigureParams = {
      webClientId:
        Platform.OS === 'android'
          ? env.GOOGLE_WEB_CLIENT_ID
          : env.GOOGLE_IOS_CLIENT_ID
    }

    GoogleSignin.configure(config)
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})

    const {idToken} = await GoogleSignin.signIn()

    const accessToken = (await GoogleSignin.getTokens()).accessToken

    const googleCredential = auth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    )

    await auth().signInWithCredential(googleCredential)
  }

  /**
   * facebookAuth
   */
  public async facebookAuth() {
      let facebookCredential: FirebaseAuthTypes.AuthCredential
      const appId = env.FACEBOOK_APP_ID || ''

      await Settings.setAppID(appId)
      const nonce = new Date().toISOString()
      const nonceSha256 = await sha256(nonce)
      const result = await LoginManager.logInWithPermissions(
        ['public_profile', 'email'],
        'limited',
        nonceSha256
      )

      if (result.isCancelled) {
        throw 'User cancelled the login process'
      }

      if (Platform.OS === 'ios') {
        const dataIos = await AuthenticationToken.getAuthenticationTokenIOS()

        if (!dataIos) {
          throw 'Something went wrong obtaining authentication token'
        }

        facebookCredential = auth.FacebookAuthProvider.credential(
          dataIos?.authenticationToken,
          nonce
        )
      } else {
        const dataAndroid = await AccessToken.getCurrentAccessToken()

        if (!dataAndroid) {
          throw 'Something went wrong obtaining authentication token'
        }

        facebookCredential = auth.FacebookAuthProvider.credential(
          dataAndroid?.accessToken
        )
      }
      await auth().signInWithCredential(facebookCredential)
   
  }

  /**
   * appleAuth
   */
  public async appleAuth() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    })

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned')
    }

    const {identityToken, nonce} = appleAuthRequestResponse
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce
    )

    await auth().signInWithCredential(appleCredential)
  }
}

export const authSocial = new AuthSocial()
