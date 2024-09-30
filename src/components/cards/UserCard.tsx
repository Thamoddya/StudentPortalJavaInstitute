import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextStyles} from '../../styles/AppStyles';
import Colors from '../../styles/Colors';

interface UserCardProps {
  profileImage: string;
  firstName: string;
  lastName: string;
  isOnline: boolean;
  lastSeen: string;
  lastMessage: string;
  navigation?: any;
}

const UserCard: React.FC<UserCardProps> = ({
  profileImage,
  firstName,
  lastName,
  isOnline,
  lastSeen,
  lastMessage,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Chat')}
      activeOpacity={0.8}
      style={[styles.container]}>
      <View>
        <Image style={[styles.ProfileImage]} source={{uri: profileImage}} />
        {isOnline && <View style={[styles.profileDot]} />}
      </View>
      <View style={[styles.subDetailContainer]}>
        <View style={[styles.nameLastSeenContainer]}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.nameText]}>{`${firstName} ${lastName}`}</Text>
          <Text style={[styles.lastSeenText]}>{lastSeen}</Text>
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.lastMessageText]}>
          {lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: '#9D9C9C',
    borderBottomWidth: 0.2,
    paddingVertical: 16,
    alignItems: 'flex-start',
    gap: 8,
  },
  ProfileImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  profileDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: '#00FF75',
    position: 'absolute',
    right: 5,
    bottom: 0,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  nameLastSeenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  subDetailContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    ...TextStyles.H3,
    color: Colors.PRIMARY_WHITE,
    textAlign: 'left',
    lineHeight: 20,
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 8,
  },
  lastSeenText: {
    ...TextStyles.P,
    fontSize: 12,
    color: Colors.GRAY_500,
    textAlign: 'right',
    lineHeight: 12,
    flexShrink: 0,
    flexBasis: 70,
    marginLeft: 8,
  },
  lastMessageText: {
    ...TextStyles.P,
    color: Colors.GRAY_500,
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 14,
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 8,
  },
});
