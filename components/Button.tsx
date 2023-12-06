import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

interface ButtonProps {
  showArrow?: boolean;
  disabled?: boolean;
  btnText: string;
  onPress: () => void;
}

const Button = ({
  showArrow,
  btnText,
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <Pressable
      className="bg-light-orange flex flex-row items-center justify-center rounded-lg px-16 py-3 w-full"
      onPress={onPress}
      disabled={disabled}
    >
      <View className="flex flex-row mx-auto items-center justify-center">
        <Text className={`text-white  text-base font-bold mr-2`}>
          {btnText}
        </Text>
        {showArrow ? (
          <AntDesign name="arrowright" size={20} color="white" />
        ) : null}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
