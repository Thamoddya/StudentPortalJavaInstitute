import {
  ArrowRight2,
  Edit2,
  GlobalRefresh,
  MusicDashboard,
  Notification,
  NotificationStatus,
} from "iconsax-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
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
        <Text style={[styles.middleText]}>Profile</Text>
      </View>
    );
  };

  // MARK: - Render
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });
  return (
    <SafeAreaView style={[ScreenStyles.container]}>
      <HeaderView />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.profile}>
            <Image
              alt="image"
              source={{
                uri: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg",
              }}
              style={styles.profileAvatar}
            />
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@mail.com</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={[
                      styles.rowIcon,
                      {
                        backgroundColor: "#007AFF",
                      },
                    ]}
                  >
                    <Edit2 color="#fff" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Update Profile</Text>
                  <View style={styles.rowSpacer} />
                  <ArrowRight2 color="#C6C6C6" size={20} />
                </TouchableOpacity>
              </View>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#fe9400" }]}
                  >
                    <GlobalRefresh color="#fff" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Language</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>English</Text>
                  <ArrowRight2 color="#C6C6C6" size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#007AFF" }]}
                  >
                    <GlobalRefresh color="#fff" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Dark Mode</Text>
                  <View style={styles.rowSpacer} />
                  <Switch
                    onValueChange={(darkMode) => setForm({ ...form, darkMode })}
                    value={form.darkMode}
                  />
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}
                >
                  <View
                    style={[styles.rowIcon, { backgroundColor: "#32c759" }]}
                  >
                    <GlobalRefresh color="#fff" size={20} />
                  </View>
                  <Text style={styles.rowLabel}>Location</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={styles.rowValue}>Los Angeles, CA</Text>
                  <ArrowRight2 color="#C6C6C6" size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Notifications</Text>
              <View style={styles.sectionBody}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: "#38C959" }]}
                    >
                      <NotificationStatus color="#fff" size={20} />
                    </View>
                    <Text style={styles.rowLabel}>Email Notifications</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={(emailNotifications) =>
                        setForm({ ...form, emailNotifications })
                      }
                      value={form.emailNotifications}
                    />
                  </View>
                </View>
                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: "#38C959" }]}
                    >
                      <Notification color="#fff" size={20} />
                    </View>
                    <Text style={styles.rowLabel}>Push Notifications</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={(pushNotifications) =>
                        setForm({ ...form, pushNotifications })
                      }
                      value={form.pushNotifications}
                    />
                  </View>
                </View>
                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}
                  >
                    <View
                      style={[styles.rowIcon, { backgroundColor: "#FE3C30" }]}
                    >
                      <MusicDashboard color="#fff" size={20} />
                    </View>
                    <Text style={styles.rowLabel}>Sound</Text>
                    <View style={styles.rowSpacer} />
                    <Text style={styles.rowValue}>Default</Text>
                    <ArrowRight2 color="#C6C6C6" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.contentFooter}>By Thamoddya Rashmitha</Text>
        </ScrollView>
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
    backgroundColor: Colors.PRIMARY_BLACK,
  },
  middleText: {
    ...TextStyles.H3,
    color: Colors.PRIMARY_WHITE,
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
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    marginTop: 6,
  },
  /** Profile */
  profile: {
    padding: 16,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_BLACK,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "600",
    color: Colors.PRIMARY_WHITE,
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "400",
    color: "#848484",
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  /** Section */
  section: {
    paddingTop: 12,
  },
  sectionTitle: {
    marginVertical: 8,
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  sectionBody: {
    paddingLeft: 24,
    backgroundColor: Colors.PRIMARY_BLACK,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY_800,
  },
  /** Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 16,
    height: 50,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: Colors.GRAY_800,
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowIcon: {
    width: 30,
    height: 30,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: Colors.PRIMARY_WHITE,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: "500",
    color: "#8B8B8B",
    marginRight: 4,
  },
});
