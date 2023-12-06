import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Wishlist from '../screens/Wishlist';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import { TabParamList } from '../types';
import { COLORS } from '../assets/colors';
import { AntDesign, Feather, Ionicons, Octicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator: React.FC = () => {
  const tabOptions = {
    headerShown: false,
    tabBarActiveTintColor: COLORS.Orange,
  };
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          ...tabOptions,
          tabBarIcon(props) {
            return (
              <Octicons
                name="home"
                size={22}
                color={props.focused ? COLORS.Orange : COLORS.Gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          ...tabOptions,
          tabBarIcon(props) {
            return (
              <Feather
                name="star"
                size={22}
                color={props.focused ? COLORS.Orange : COLORS.Gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          ...tabOptions,
          tabBarIcon(props) {
            return (
              <Ionicons
                name="person-outline"
                size={22}
                color={props.focused ? COLORS.Orange : COLORS.Gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          ...tabOptions,
          tabBarIcon(props) {
            return (
              <Ionicons
                name="cart-outline"
                size={22}
                color={props.focused ? COLORS.Orange : COLORS.Gray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
