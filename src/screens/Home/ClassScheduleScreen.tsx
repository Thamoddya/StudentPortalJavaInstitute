import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import LectureCard from "../../components/cards/LectureCard";
import { ScreenStyles, TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

let dummyLectures = [
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
    isToday: false,
    time: "12:00 PM - 2:00 PM",
  },
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 3",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: false,
    time: "2:00 PM - 4:00 PM",
  },
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 4",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: false,
    time: "4:00 PM - 6:00 PM",
  },
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 5",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: false,
    time: "6:00 PM - 8:00 PM",
  },
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 6",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: false,
    time: "8:00 PM - 10:00 PM",
  },
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 7",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: false,
    time: "10:00 PM - 12:00 AM",
  },
  {
    title: "AOOP-III - Advanced Object-Oriented Programming Day 8",
    venue: "Kandy - Online",
    lecturer: "Dr Tharaka Sankalpa",
    date: "10-October-2024",
    isToday: false,
    time: "12:00 AM - 2:00 AM",
  },
];

const ClassScheduleScreen = () => {
  // MARK: - Component

  const HeaderView: React.FC = () => {
    return (
      <View style={[styles.headerView]}>
        <Text style={[styles.middleText]}>Upcoming Lectures</Text>
      </View>
    );
  };

  // MARK: - Render
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <HeaderView />
      <ScrollView style={[ScreenStyles.subContainer]}>
        {dummyLectures.map((item, index) => (
          <LectureCard
            key={index}
            title={item.title}
            venue={item.venue}
            lecturer={item.lecturer}
            date={item.date}
            isToday={item.isToday}
            url={item.url}
            time={item.time}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassScheduleScreen;

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
});
