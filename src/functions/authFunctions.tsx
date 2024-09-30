// AuthFunctions.tsx
export const AuthFunctions = {
  signUpProcess: (navigation: any) => {
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTabNavigation'}],
    });
  },
  signInProcess: (navigation: any) => {
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTabNavigation'}],
    });
  },
};
