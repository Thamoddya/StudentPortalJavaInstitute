import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LectureCard from "../../components/cards/LectureCard";
import { ScreenStyles, TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // MARK: - Component
  const HeaderView: React.FC = () => {
    return (
      <View style={[styles.headerView]}>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/images/login-invert.png")}
            style={[
              {
                resizeMode: "contain",
                width: 120,
                height: 55,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.profileImage]}
            source={require("../../../assets/images/myImg.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const UserCard: React.FC = () => {
    return (
      <View style={[styles.userCardsView]}>
        <Text style={[styles.middleText]}>Thamoddya Rashmitha</Text>
        <Text style={[styles.subtextTwo]}>2023/2024/KA/SE/Intake10</Text>
        <Text style={[styles.subText]}>Moose Kandy</Text>
      </View>
    );
  };

  const TodayLectures: React.FC = () => {
    return (
      <View style={[styles.lecturesView]}>
        <Text style={[styles.titleText]}>Today's Lectures</Text>
        {/* <Text style={[styles.subText]}>No Lectures</Text> */}
        <LectureCard />
        <LectureCard />
      </View>
    );
  };

  // MARK: - Render
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <HeaderView />
      <ScrollView contentContainerStyle={[styles.mainContainer]}>
        <UserCard />
        <TodayLectures />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    ...TextStyles.H6,
    color: Colors.SUB_1,
  },
  middleText: {
    ...TextStyles.H1,
    color: Colors.PRIMARY_BLACK,
    fontWeight: "bold",
    fontSize: 28,
  },
  subText: {
    ...TextStyles.H4,
    color: Colors.SUB_1,
  },
  subtextTwo: {
    ...TextStyles.H5,
    color: Colors.GRAY_700,
  },
  titleText: {
    ...TextStyles.H2,
    color: Colors.PRIMARY_BLACK,
    fontWeight: "bold",
  },
  mainContainer: {
    backgroundColor: Colors.PRIMARY_WHITE,
    padding: 16,
    flexGrow: 1,
  },
  userCardsView: {
    width: "100%",
    flexDirection: "column",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: "auto",
    borderColor: Colors.SUB_1,
    borderWidth: 2,
    resizeMode: "cover",
  },
  lecturesView: {
    width: "100%",
    flexDirection: "column",
    marginTop: 20,
  },
});
