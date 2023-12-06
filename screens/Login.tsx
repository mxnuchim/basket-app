import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { images } from '../assets';
import { RootStackParamList } from '../types';
import Button from '../components/Button';
import { COLORS } from '../assets/colors';
import { isAValidEmail } from '../utils/helpers';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { LogoSmall, GoogleIcon, AppleIcon, FacebookIcon } = images;

const Login: React.FC<{
  navigation: NativeStackNavigationProp<RootStackParamList>;
}> = ({ navigation }) => {
  const [state, setState] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const handleTextChange = (key: string, value: string) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  useEffect(() => {
    console.log('email --> ', state.email);
    console.log('password --> ', state.password);
  }, [state.email, state.password]);

  const BottomComponent = () => {
    return (
      <View className="flex flex-1 items-center justify-center mt-7">
        <Text className="text-dark-blue font-semibold text-center text-base mb-5">
          Or sign up with
        </Text>

        <View className="flex flex-row justify-evenly w-full px-[10%]">
          {[GoogleIcon, AppleIcon, FacebookIcon].map((item, index) => (
            <View
              className="border border-gray-600 rounded-lg w-12 h-10 items-center justify-center"
              key={index}
            >
              <Image
                source={item}
                className="max-w-6 max-h-6"
                resizeMode="contain"
              />
            </View>
          ))}
        </View>

        <Pressable className="w-full items-center justify-center mt-auto">
          <Text className="text-gray-400 text-center text-sm ">
            Don't have an account?{' '}
            <Text className="text-dark-blue font-semibold">Sign up</Text>
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {/** <============== Top Section ==============> */}
      <View className="flex flex-row items-center gap-3 mb-10">
        <Image source={LogoSmall} className="max-w-24 max-h-24" />
        <Text className="text-dark-blue text-center text-3xl font-bold">
          Basket
        </Text>
      </View>

      {/** <============== Inputs ==============> */}

      <KeyboardAvoidingView behavior={'height'} className="w-full flex-1">
        <Text className="text-dark-blue font-semibold text-base mb-5">
          Login to your account
        </Text>

        <TextInput
          placeholder="Email"
          className="shadow bg-white px-3 py-3 text-base rounded-lg mb-5 text-gray-700"
          onChangeText={(e) => handleTextChange('email', e)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          className="shadow bg-white px-3 py-3 text-base rounded-lg mb-5 text-gray-700"
          onChangeText={(e) => handleTextChange('password', e)}
          secureTextEntry
          keyboardType="default"
        />

        <View className="mb-5">
          <Button
            btnText="Sign in"
            onPress={() => navigation.navigate('Tabs')}
            disabled={false}
          />
        </View>

        {/** <============== Social sign ins ==============> */}
        <BottomComponent />
      </KeyboardAvoidingView>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.White,
    paddingHorizontal: '5%',
    paddingTop: '20%',
    paddingBottom: '10%',
  },
});
