import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenStyles, TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  let ActionSheetRef = React.useRef<ActionSheetRef>(null);
  const insets = useSafeAreaInsets();

  // MARK: - Component

  const HeaderView: React.FC = () => {
    return (
      <View style={[styles.headerView]}>
        <Text style={[styles.middleText]}>Student Details</Text>
      </View>
    );
  };

  const CustomActionSheet: React.FC = () => {
    return (
      <ActionSheet
        indicatorStyle={{
          backgroundColor: Colors.GRAY_400,
          marginTop: 16,
        }}
        gestureEnabled={true}
        safeAreaInsets={insets}
        drawUnderStatusBar={false}
        //Top node of the ActionSheet
        animated={true}
        closable={true}
        enableGesturesInScrollView={true}
        headerAlwaysVisible={true}
        keyboardHandlerEnabled={true}
        overdrawEnabled={true}
        backgroundInteractionEnabled={false}
        overlayColor={Colors.PRIMARY_WHITE}
        elevation={0}
        statusBarTranslucent={true}
        containerStyle={{
          backgroundColor: Colors.PRIMARY_WHITE,
          height: Dimensions.get("window").height / 3,
          shadowColor: Colors.PRIMARY_BLACK,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.85,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        ref={ActionSheetRef}
      >
        <View style={[styles.transparentActionSheet]}>
          <Text style={[styles.mainText]}>Sure?</Text>
          <Text style={[styles.subText]}>
            Are you sure you want to logout from the application?
          </Text>
          <View style={{ flexGrow: 1 }} />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY_RED,
              padding: 16,
              borderRadius: 8,
              alignItems: "center",
              width: "100%",
            }}
          >
            <Text style={{ color: Colors.PRIMARY_WHITE }}>Logout</Text>
          </TouchableOpacity>
          <View style={{ flexGrow: 1 }} />
        </View>
      </ActionSheet>
    );
  };

  const ProfileView: React.FC = () => {
    return (
      <View style={styles.profile}>
        <View style={[styles.profileView]}>
          <Image
            alt="image"
            source={require("../../../assets/images/myImg.jpg")}
            style={styles.profileAvatar}
          />
        </View>
        <Text style={[styles.profileName]}>Thamoddya Rashmitha</Text>
        <Text style={[styles.profileBranch]}>2023/2024/KA/SE/Intake10</Text>
        <Text style={[styles.profileBatch]}>Moose Kandy</Text>
      </View>
    );
  };

  // MARK: - Render
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <HeaderView />
      <View style={styles.container}>
        <ProfileView />
        <View
          style={[
            {
              flexGrow: 1,
            },
          ]}
        ></View>
        <TouchableOpacity
          onPress={() => {
            ActionSheetRef.current?.show();
          }}
          style={styles.logoutButton}
        >
          <Text style={{ color: Colors.PRIMARY_WHITE }}>Logout</Text>
        </TouchableOpacity>
      </View>
      {<CustomActionSheet />}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  middleText: {
    ...TextStyles.H3,
    color: Colors.PRIMARY_BLACK,
    fontWeight: "bold",
  },
  imageBackground: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container: {
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  /** Profile */
  profile: {
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  profileAvatar: {
    width: 88,
    height: 88,
    borderRadius: 9999,
    borderColor: Colors.PRIMARY_WHITE,
    borderWidth: 2,
  },
  profileName: {
    ...TextStyles.H2,
    marginTop: 12,
    fontWeight: "600",
    color: Colors.PRIMARY_BLACK,
  },
  profileBranch: {
    ...TextStyles.H4,
    fontWeight: "400",
    color: Colors.GRAY_500,
  },
  profileBatch: {
    ...TextStyles.H4,
    fontWeight: "400",
    color: Colors.GRAY_500,
  },
  profileView: {
    width: 92,
    height: 92,
    borderRadius: 9999,
    borderColor: Colors.SUB_1,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: Colors.PRIMARY_RED,
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  transparentActionSheet: {
    backgroundColor: Colors.PRIMARY_WHITE,
    padding: 16,
    borderRadius: 10,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  mainText: {
    ...TextStyles.H1,
    color: Colors.PRIMARY_BLACK,
    textAlign: "center",
  },
  subText: {
    ...TextStyles.H6,
    color: Colors.GRAY_500,
    textAlign: "center",
  },
});
