import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScreenStyles, TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

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
