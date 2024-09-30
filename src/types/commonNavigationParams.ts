export type CommonNavigationParams = {
  Splash: undefined;
  BottomTabNavigation: undefined;
};

export type AuthNavigationParams = {
  SignIn: undefined;
};

export type AppNavigationRoutes = {
  Home: undefined;
  Profile: undefined;
};
export type AppNavigationParams = CommonNavigationParams &
  AuthNavigationParams &
  AppNavigationRoutes;
