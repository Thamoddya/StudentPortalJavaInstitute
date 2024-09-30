import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

import Colors from "../../styles/Colors";

interface SplashScreenProps {
  navigation: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const isLogged = false;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 0, // Reset opacity before triggering animation again
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }).start();
      });

      const timeout = setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
        console.log("SplashScreen");
      }, 3000);

      return () => clearTimeout(timeout);
    }, [navigation])
  );

  useEffect(() => {
    StatusBar.setBarStyle("dark-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(Colors.PRIMARY_BLACK);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[{ opacity: fadeAnim }]}>
        <Image
          source={require("../../../assets/images/ic_launcher-playstore.png")}
          style={{ width: 150, height: 150 }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
    flex: 1,
  },
});
