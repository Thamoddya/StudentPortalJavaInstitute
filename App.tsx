import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import SignInScreen from "./src/screens/auth/SignInScreen";
import SplashScreen from "./src/screens/common/SplashScreen";
import { store } from "./src/store/store";
import Colors from "./src/styles/Colors";
import { AppNavigationParams } from "./src/types/commonNavigationParams";
const Stack = createNativeStackNavigator<AppNavigationParams>();

interface ScreenConfig {
  name: keyof AppNavigationParams;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}

const ScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  headerBackVisible: false,
  headerTitle: "",
  headerTintColor: Colors.PRIMARY_WHITE,
  headerStyle: { backgroundColor: Colors.PRIMARY_WHITE },
  headerShadowVisible: false,
  statusBarColor: Colors.PRIMARY_WHITE,
};

const blackStatusBar: NativeStackNavigationOptions = {
  statusBarColor: Colors.PRIMARY_WHITE,
};
const disableHeader: NativeStackNavigationOptions = {
  headerShown: false,
};
const screens: ScreenConfig[] = [
  {
    name: "Splash",
    component: SplashScreen,
    options: {
      ...ScreenOptions,
      statusBarTranslucent: true,
    },
  },
  {
    name: "SignIn",
    component: SignInScreen,
    options: {
      ...ScreenOptions,
      ...blackStatusBar,
      statusBarTranslucent: true,
    },
  },
  {
    name: "BottomTabNavigation",
    component: MainTabNavigator,
    options: {
      headerShown: false,
      headerBackTitleVisible: false,
      ...disableHeader,
    },
  },
];
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "fade",
            animationDuration: 1200,
            animationTypeForReplace: "pop",
          }}
          initialRouteName="Splash"
        >
          {screens.map(({ name, component, options }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
