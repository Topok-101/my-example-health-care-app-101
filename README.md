# 🏥 HealthCare Sample RN 0.72

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/W1MD3TV8GRgusg7kokUWhX/SQtz4xF28VJ4uqE2GoN5p3/tree/staging.svg?style=svg&circle-token=9d097fcd7239a5e31338937634de0d36887b8d25)](https://dl.circleci.com/status-badge/redirect/circleci/W1MD3TV8GRgusg7kokUWhX/SQtz4xF28VJ4uqE2GoN5p3/tree/staging)

A modern React Native healthcare application built with best practices and clean architecture.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- React Native development environment
- iOS device/simulator (for iOS testing)
- Android device/emulator (for Android testing)

### Installation

1. Navigate to the project directory:
   ```bash
   cd my-example-health-care-app-101
   ```

2. Install dependencies and start with clean cache:
   ```bash
   yarn install && yarn start --reset-cache
   ```
my-example-health-care-app-101
### Running the App

#### 📱 Android
```bash
yarn android
```

#### 🍎 iOS
```bash
yarn ios
```

> **Note:** iOS testing and deployment requires an Apple device and proper development setup.

---

## 🔧 Development Setup

### Project Permissions
Grant execution permissions to environment scripts:
```bash
chmod +x envscript.sh
# or
chmod +x ./envscript.sh
```

### iOS CircleCI Configuration

1. **Sign Session for iOS CircleCI:**
   ```bash
   fastlane spaceauth -u your_email_
   ```

2. **Environment Variables:**
   Set up the `FASTLANE_SESSION` environment variable in CircleCI project settings.

---

## 📁 Project Architecture

```
src/
├── 🧩 components/           # Reusable UI components (atoms, molecules, organisms, templates)
├── 🧭 navigations/          # Navigation configuration
│   ├── stacks.navigate.ts
│   ├── appLink.navigate.ts
│   ├── app.navigate.ts
│   └── root.navigate.ts
├── 🎨 assets/               # Static files (fonts, images, videos)
├── 🛠️ helpers/              # Utility functions and reusable logic
├── 📊 models/               # Data models
├── 🎯 view-models/          # Business logic layer
├── ⚡ features/             # Feature-based modules
│   └── ExampleFeature/
│       ├── Example.feature.tsx
│       ├── components/
│       ├── styles.ts
│       ├── store/
│       │   ├── example.slice.ts
│       │   ├── example.dispatch.ts
│       │   ├── example.reducer.ts
│       │   └── index.ts
│       ├── view-model/
│       │   ├── example.view-model.ts
│       │   └── index.ts
│       └── interface/
├── 🏪 store/               # Redux state management
│   ├── exampleStore/
│   ├── index.ts
│   └── hook.ts
├── 🌐 services/            # API communications
│   ├── example.service.ts
│   └── apis/
├── 🎣 hooks/               # Custom React hooks
├── 🌍 language/            # Internationalization
│   ├── en/
│   ├── th/
│   └── index.ts
├── ⚙️ config/              # App configuration
│   ├── colorTheme.ts
│   └── i18n.ts
└── 📝 types/               # TypeScript type definitions
```

---

## 🏗️ Architecture Guidelines

### **Components**
- **Atoms:** Basic building blocks (buttons, inputs)
- **Molecules:** Simple component combinations
- **Organisms:** Complex UI sections
- **Templates:** Page layout structures

### **Features**
Each feature follows a self-contained module pattern with its own:
- Components and styles
- Redux store management
- View models for business logic
- TypeScript interfaces

### **State Management**
- **Redux Toolkit** for global state
- **Custom hooks** for component-level state
- **View models** for business logic separation

### **Services**
- Centralized API communication
- Clean separation of concerns
- Reusable service methods

---

## 🎨 Styling & Assets

### Font Integration
1. Install react-native-asset globally:
   ```bash
   yarn global add react-native-asset
   ```

2. Configure `react-native.config.js` with your assets

3. Link fonts:
   ```bash
   react-native-asset
   ```

### Responsive Design Metrics
- **`verticalScale`:** Heights, vertical margins/padding, line-height
- **`horizontalScale`:** Widths, horizontal margins/padding
- **`moderateScale`:** Font sizes, border radius

---

## 🤖 Android Configuration

### API Level 26+ Support

#### MainActivity.java Enhancement
Add to `onCreate()` method in `app/src/main/java/MainActivity.java`:
```java
if (android.os.Build.VERSION.SDK_INT != Build.VERSION_CODES.O) {
    setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
}
```

#### Styling Configuration

**For API Level 26 (`app/src/main/res/values-v26/styles.xml`):**
```xml
<style name="Theme.App.Starting" parent="Theme.SplashScreen">
  <item name="android:windowIsTranslucent">false</item>
  <item name="postSplashScreenTheme">@style/AppTheme</item>
</style>
```

**For API Level 27+ (`app/src/main/res/values-v27/styles.xml`):**
```xml
<style name="Theme.App.Starting" parent="Theme.SplashScreen">
  <item name="android:windowIsTranslucent">true</item>
  <item name="postSplashScreenTheme">@style/AppTheme</item>
</style>
```

---

## 🌐 Internationalization

The app supports multiple languages:
- **English (en)**
- **Thai (th)**

Language files are located in `src/language/` with centralized configuration in `src/config/i18n.ts`.

---

## 🤝 Contributing

1. Follow the established folder structure
2. Use consistent naming conventions (camelCase for files)
3. Implement proper TypeScript typing
4. Write reusable components following atomic design principles
5. Maintain clean separation between UI, business logic, and data layers

---

*Built with ❤️ using React Native*