#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "RNSplashScreen.h"
#import <Firebase.h>
#import <FBSDKCoreKit/FBSDKCoreKit-swift.h>
#import <RNGoogleSignin/RNGoogleSignin.h>
#import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {
  return [[FBSDKApplicationDelegate sharedInstance] application:application openURL:url options:options] || [RNGoogleSignin application:application openURL:url options:options];
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"HealthCare";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  [GMSServices provideAPIKey:@"API_KEY"];
   // Add Google map sdk ^ here.
  [FIRApp configure];
  NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
  if (![defaults boolForKey:@"notFirstRun"]) {
    [defaults setBool:YES forKey:@"notFirstRun"];
    [defaults synchronize];
    [[FIRAuth auth] signOut:NULL];
  }
  // Add firebase sdk ^ here.
  [FBSDKApplicationDelegate.sharedInstance initializeSDK];
  [[FBSDKApplicationDelegate sharedInstance] application:application
                       didFinishLaunchingWithOptions:launchOptions];
    // Add facebook sdk ^ here.
    
  bool didFinish = [super application:application didFinishLaunchingWithOptions:launchOptions];
  [RNSplashScreen show];

  return didFinish;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
