import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

const LectureCard = () => {
  return (
    <View style={[styles.cardView]}>
      <View style={[styles.dateView]}>
        <Text style={[styles.topDateText]}>10-October-2024</Text>
      </View>
      <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.titleText]}>
        AOOP-III - Advanced Object-Oriented Programming Day 1
      </Text>
      <View style={[styles.detailContainer]}>
        <Text style={[styles.venueText]}>Kandy - Online</Text>
        <Text style={[styles.subText]}>8.30AM - 10.30AM</Text>
      </View>
      <Text style={[styles.lecturerText]}>Dr Tharaka Sankalpa</Text>
    </View>
  );
};

export default LectureCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginVertical: 14,
    borderColor: Colors.SUB_1,
    borderWidth: 1,
  },
  titleText: {
    ...TextStyles.H3,
    fontWeight: "bold",
    color: Colors.GRAY_700,
  },
  subText: {
    ...TextStyles.H5,
    color: Colors.SUB_1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  venueText: {
    ...TextStyles.H5,
    color: Colors.SUB_1,
    fontWeight: "bold",
  },
  lecturerText: {
    ...TextStyles.H4,
    color: Colors.GRAY_600,
    marginTop: 5,
    fontWeight: "bold",
  },
  subtextTwo: {
    fontSize: 16,
    color: "#000",
  },
  middleText: {
    fontSize: 18,
    color: "#000",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userCardsView: {
    alignItems: "center",
    marginVertical: 10,
  },
  lecturesView: {
    marginVertical: 10,
  },
  mainContainer: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  dateView: {
    position: "absolute",
    top: -10,
    right: 10,
    backgroundColor: Colors.PRIMARY_WHITE,
    paddingHorizontal: 5,
    zIndex: 999,
    borderRadius: 5,
  },
  topDateText: {
    ...TextStyles.H4,
    color: Colors.PRIMARY_BLACK,
    fontWeight: "bold",
  },
});
