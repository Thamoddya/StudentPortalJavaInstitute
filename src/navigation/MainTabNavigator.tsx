import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Book, Home2, Profile } from "iconsax-react-native";
import React from "react";
import ClassScheduleScreen from "../screens/Home/ClassScheduleScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/Home/ProfileScreen";
import Colors from "../styles/Colors";
import { AppNavigationParams } from "../types/commonNavigationParams";

const Tab = createMaterialBottomTabNavigator<AppNavigationParams>();

const tabBarOptions = {
  tabBarActiveTintColor: Colors.PRIMARY_WHITE,
  tabBarInactiveTintColor: Colors.GRAY_500,
  tabBarShowLabel: true,
  tabBarStyle: {
    backgroundColor: Colors.PRIMARY_BLACK,
    borderTopWidth: 0.5,
    elevation: 0,
    shadowOpacity: 0,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "bold" as "bold",
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStatusBar: "dark-content",
  lazy: true,
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: Colors.PRIMARY_WHITE,
        borderTopWidth: 0.5,
        elevation: 0,
        borderTopColor: Colors.GRAY_500,
      }}
      activeColor={Colors.PRIMARY_BLACK}
      inactiveColor={Colors.GRAY_500}
      backBehavior="firstRoute"
      initialRouteName="Home"
      keyboardHidesNavigationBar={true}
      labeled={true}
      shifting={true}
      sceneAnimationType="opacity"
      screenOptions={{
        tabBarColor: Colors.PRIMARY_BLACK,
      }}
      activeIndicatorStyle={{
        backgroundColor: Colors.PRIMARY_BLACK,
        height: 0,
      }}
      compact={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home2
              size={24}
              color={color}
              variant={focused ? "Bold" : "Outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ClassSchedule"
        component={ClassScheduleScreen}
        options={{
          tabBarLabel: "Lectures",
          tabBarIcon: ({ color, focused }) => (
            <Book
              size={24}
              color={color}
              variant={focused ? "Bold" : "Outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Profile
              size={24}
              color={color}
              variant={focused ? "Bold" : "Outline"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
