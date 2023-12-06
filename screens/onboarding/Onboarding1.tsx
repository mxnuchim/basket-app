import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { images } from '../../assets';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const { onboarding_img, LogoLarge } = images;

const Onboarding1: React.FC<{
  navigation: NativeStackNavigationProp<RootStackParamList>;
}> = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={onboarding_img}
      blurRadius={1}
      style={styles.imageBackground}
    >
      <View style={styles.overlay}>
        <View className="w-full items-start mb-auto">
          <AntDesign name="arrowleft" size={24} color="white" />
        </View>
        <View className="w-full items-center">
          <Image source={LogoLarge} className="max-w-56 max-h-56 mb-10" />

          <View className="gap-3">
            {['Stay Shopping.', 'Stay Happy.', 'Anytime.'].map(
              (item, index) => (
                <Text
                  key={index}
                  className="text-white text-center text-3xl font-bold"
                >
                  {item}
                </Text>
              )
            )}
          </View>
        </View>
        <View className="w-full items-center mt-auto">
          <Text className="text-white mb-5 text-center text-sm font-bold">
            Basket Online Marketplace
          </Text>
          <View className="flex flex-row w-full justify-between items-center">
            <Pressable
              onPress={() => {
                navigation.navigate('Login');
              }}
              className=""
            >
              <Text className="text-white text-center text-base font-bold">
                Skip
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Onboarding2');
              }}
              className=""
            >
              <AntDesign name="arrowright" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '15%',
  },
});
