import { View, Text, Pressable, Platform } from 'react-native';
import React from 'react';

interface ProfileItemProps {
  item: string;
  Icon: any;
  onPress?: () => void;
}

const ProfileItem = ({ item, Icon, onPress }: ProfileItemProps) => {
  return (
    <Pressable
      className={`flex flex-row w-full items-center px-10 py-2 bg-white ${
        Platform.OS === 'ios' ? 'my-1' : ''
      }`}
      onPress={onPress}
    >
      {Icon}
      <Text className="text-dark-blue font-semibold text-lg text-start ml-4">
        {item}
      </Text>
      <View></View>
    </Pressable>
  );
};

export default ProfileItem;
