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
let dummyData = [
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 1",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: true,
    url: "https://www.google.com",
    time: "10:00 AM - 12:00 PM",
  },
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 2",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: true,
    time: "12:00 PM - 2:00 PM",
  },
];
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

  const AttendanceMarking: React.FC = () => {
    return (
      <View style={[styles.lecturesView]}>
        <Text style={[styles.titleText]}>Mark Attendance</Text>
        <Text style={[styles.subText]}>
          No attendance to be marked at the moment
        </Text>
      </View>
    );
  };

  const TodayLectures: React.FC = () => {
    return (
      <View style={[styles.lecturesView]}>
        <Text style={[styles.titleText]}>Today's Lectures</Text>
        {/* <Text style={[styles.subText]}>No Lectures</Text> */}
        {dummyData.map((data, index) => (
          <LectureCard
            key={index}
            title={data.title}
            venue={data.venue}
            lecturer={data.lecturer}
            date={data.date}
            isToday={data.isToday}
            url={data.url}
            time={data.time}
          />
        ))}
      </View>
    );
  };

  // MARK: - Render
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <HeaderView />
      <ScrollView contentContainerStyle={[styles.mainContainer]}>
        <UserCard />
        <AttendanceMarking />
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
