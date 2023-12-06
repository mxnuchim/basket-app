import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../assets/colors';
import { images } from '../../assets';
import Button from '../../components/Button';

const { LogoSmall, people } = images;

const Onboarding2: React.FC<{
  navigation: NativeStackNavigationProp<RootStackParamList>;
}> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/** <============== Top Section ==============> */}
      <View className="flex flex-row items-center gap-3 mb-10">
        <Image source={LogoSmall} className="max-w-24 max-h-24" />
        <Text className="text-white text-center text-3xl font-bold">
          Basket
        </Text>
      </View>

      {/** <============== Text ==============> */}
      <View className="gap-1">
        <Text className="text-white text-center text-sm">Welcome to</Text>
        <Text className="text-white text-center text-2xl font-bold">
          Basket Online Marketplace
        </Text>
        <Text className="text-white text-center text-sm">
          Basket is the best online store of borth new wand used products
        </Text>
      </View>

      {/** <============== Image ==============> */}
      <View className="mt-24 items-center max-w-[90%]">
        <Image source={people} className="mb-10" />

        <Button
          showArrow
          btnText="Get Started"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.DarkBlue,
    paddingHorizontal: '5%',
    paddingTop: '20%',
  },
});
