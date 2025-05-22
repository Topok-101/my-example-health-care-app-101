case "$ENV" in
    "production")
     echo "Switching to Google-service file prod environment.💡"
     yes | cp -rf "firebase/prod/google-services.json" android/app
     yes | cp -rf "firebase/prod/GoogleService-Info.plist" ios
     ;;
     "development")
     echo "Switching to Google-service file dev environment.💡"
     yes | cp -rf "firebase/dev/google-services.json" android/app
     yes | cp -rf "firebase/dev/GoogleService-Info.plist" ios
     ;;
esac