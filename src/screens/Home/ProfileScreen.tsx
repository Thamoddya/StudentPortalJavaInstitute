import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScreenStyles, TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  // MARK: - Component

  const HeaderView: React.FC = () => {
    return (
      <View style={[styles.headerView]}>
        <Text style={[styles.middleText]}>Student Details</Text>
      </View>
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
        <View style={styles.logoutButton}>
          <Text style={{ color: Colors.PRIMARY_WHITE }}>Logout</Text>
        </View>
      </View>
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
});
