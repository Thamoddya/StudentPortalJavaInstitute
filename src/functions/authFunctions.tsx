import { Linking } from "react-native";

// AuthFunctions.tsx
export const AuthFunctions = {
  signInProcess: (navigation: any) => {
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTabNavigation'}],
    });
  },
  openWebUrl: (url: string) => {
    Linking.openURL(url);
  },
};
