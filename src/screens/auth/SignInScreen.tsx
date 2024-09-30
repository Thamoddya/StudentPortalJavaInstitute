import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import ThemedButton from "../../components/buttons/ThemeButton";
import CustomTextInput from "../../components/inputs/CustomTextInput";
import PasswordInputField from "../../components/inputs/PasswordInputField";
import { AuthFunctions } from "../../functions/authFunctions";
import { AppDispatch, RootState } from "../../store/store";
import { TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

interface SignInScreenProps {
  navigation: any;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { email, password } = useSelector((state: RootState) => state.auth);

  // MARK: - Lifecycle
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }, [])
  );

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    Platform.OS === "android" && StatusBar.setBackgroundColor("transparent");
    StatusBar.setTranslucent(true);
  }, [navigation]);

  // MARK: - Render
  return (
    <ImageBackground
      source={require("../../../assets/images/bgImg1.png")}
      style={styles.image}
    >
      <KeyboardAwareScrollView contentContainerStyle={[styles.safeView]}>
        <Text style={[styles.MainText]}>Welcome Back</Text>
        <Text style={[styles.subText]}>
          Enter your email and password to sign in.
        </Text>

        <View style={[styles.secondContainer]}>
          {/* components */}
          <CustomTextInput
            placeholder="Email"
            keyboardType="email-address"
            label="Email"
            value={email}
            onChangeText={(text: string) =>
              dispatch({ type: "auth/setEmail", payload: text })
            }
            CustomProps={{
              autoCapitalize: "none",
              autoComplete: "email",
            }}
          />
          <PasswordInputField
            placeholder="Password"
            label="Password"
            value={password}
            onChangeText={(text: string) =>
              dispatch({ type: "auth/setPassword", payload: text })
            }
          />
        </View>
        <ThemedButton
          title="Sign In"
          onPress={() => AuthFunctions.signInProcess(navigation)}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text
            style={[styles.subText, { textAlign: "center", marginTop: 16 }]}
          >
            Don't have an account?{" "}
            <Text style={{ color: Colors.PRIMARY_WHITE, fontWeight: "bold" }}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  safeView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: "center",
  },
  MainText: {
    ...TextStyles.H1,
    color: Colors.PRIMARY_WHITE,
  },
  subText: {
    ...TextStyles.P,
    color: Colors.GRAY_300,
    textAlign: "left",
  },
  secondContainer: {
    marginTop: 16,
  },
});
