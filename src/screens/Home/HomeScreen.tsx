import { Edit } from "iconsax-react-native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "../../components/cards/UserCard";
import { ScreenStyles, TextStyles } from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

interface HomeScreenProps {
  navigation: any;
}

const testUsers = [
  {
    profileImage: "https://xsgames.co/randomusers/assets/avatars/male/34.jpg",
    firstName: "Thamoddya",
    lastName: "Rashmitha Dissanayake",
    isOnline: true,
    lastSeen: "Online",
    lastMessage:
      "Hello there ! How are you ? Hello there ! How are you ? Hello there ! How are you ? ",
  },
  {
    profileImage: "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
    firstName: "Jane",
    lastName: "Doe",
    isOnline: false,
    lastSeen: "1 hour ago",
    lastMessage: "Hi",
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // MARK: - Component
  const HeaderView: React.FC = () => {
    return (
      <View style={[styles.headerView]}>
        <TouchableOpacity>
          <Text style={[styles.headerText]}>Edit</Text>
        </TouchableOpacity>
        <Text style={[styles.middleText]}>Messages</Text>
        <TouchableOpacity>
          <Edit size={24} color={Colors.SUB_1} />
        </TouchableOpacity>
      </View>
    );
  };

  const MessageView: React.FC = () => {
    return (
      <View style={[styles.userCardsView]}>
        {testUsers?.map((user, index) => (
          <UserCard
            firstName={user.firstName}
            isOnline={user.isOnline}
            key={index}
            lastMessage={user.lastMessage}
            lastSeen={user.lastSeen}
            lastName={user.lastName}
            profileImage={user.profileImage}
            navigation={navigation}
          />
        ))}
      </View>
    );
  };

  // MARK: - Render
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <HeaderView />
      <ScrollView contentContainerStyle={[styles.messagesContainer]}>
        <MessageView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    ...TextStyles.H6,
    color: Colors.SUB_1,
  },
  middleText: {
    ...TextStyles.H3,
    color: Colors.PRIMARY_WHITE,
  },
  messagesContainer: {
    backgroundColor: "#000",
    padding: 16,
    flexGrow: 1,
  },
  userCardsView: {
    width: "100%",
    flexDirection: "column",
  },
});
