import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { images } from '../assets';
import { RootStackParamList } from '../types';
import Button from '../components/Button';
import { COLORS } from '../assets/colors';
import { isAValidEmail } from '../utils/helpers';
import { Entypo, Feather, Ionicons, Octicons } from '@expo/vector-icons';
import ProfileItem from '../components/ProfileItem';

const { LogoSmall, Avatar } = images;

const Login: React.FC<{
  navigation: NativeStackNavigationProp<RootStackParamList>;
}> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('search query --> ', searchQuery);
  }, [searchQuery]);

  const Header = () => {
    return (
      <View
        className={`flex flex-row items-center justify-start mr-auto gap-3 ${
          Platform.OS === 'ios' ? 'pt-8' : 'pt-[2%]'
        }`}
      >
        <Image source={Avatar} className="rounded-full w-16 h-16" />
        <View className="">
          <Text className="text-xl font-bold text-dark-blue">
            Manuchim Oliver
          </Text>
          <Text className="text-sm font-bold text-dark-blue">
            manuchimoliver779@gmail.com
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View className="flex flex-1">
      <View
        className={`flex flex-row justify-between items-center bg-dark-blue w-full  pb-4 px-3 ${
          Platform.OS === 'ios' ? 'h-32 pt-20' : 'h-24 pt-12'
        }`}
      >
        <Image source={LogoSmall} className="w-8 h-8" />
        <TextInput
          placeholder="Search"
          className="shadow bg-white flex-1 px-4 h-8 mx-2 rounded-xl"
          onChangeText={(e) => setSearchQuery(e)}
        />
        <Entypo name="menu" size={30} color={COLORS.Orange} />
      </View>

      <View className="flex-1 items-center justify-center bg-light-orange px-3">
        <Header />
        <View className="h-[70%] mt-auto bg-white rounded-t-[30px] w-[110%]">
          <View className="fixed flex-1 w-[90%] mx-auto mt-[-18%] bg-white rounded-xl items-center justify-start pt-10">
            {ProfileMenuOptions.map((item, index) => (
              <ProfileItem
                key={index}
                item={item.text}
                Icon={item.icon}
                onPress={() => {
                  console.log('clicked');
                }}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const ProfileMenuOptions = [
  {
    text: 'Notification',
    icon: (
      <Ionicons name="notifications-outline" size={30} color={COLORS.Orange} />
    ),
  },
  {
    text: 'Edit Profile',
    icon: <Feather name="edit-2" size={30} color={COLORS.Orange} />,
  },
  {
    text: 'Wishlist',
    icon: <Feather name="star" size={30} color={COLORS.Orange} />,
  },
  {
    text: 'Order History',
    icon: <Octicons name="history" size={30} color={COLORS.Orange} />,
  },
  {
    text: 'Track Order',
    icon: <Ionicons name="location-outline" size={30} color={COLORS.Orange} />,
  },
  {
    text: 'Payment Options',
    icon: <Feather name="credit-card" size={30} color={COLORS.Orange} />,
  },
  {
    text: 'Settings',
    icon: <Feather name="settings" size={30} color={COLORS.Orange} />,
  },
  {
    text: 'Logout',
    icon: <Ionicons name="exit-outline" size={30} color={COLORS.Orange} />,
  },
];
