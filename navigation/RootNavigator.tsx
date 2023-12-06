import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Onboarding1 from '../screens/onboarding/Onboarding1';
import Onboarding2 from '../screens/onboarding/Onboarding2';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './TabsNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding1">
      <Stack.Screen
        name="Tabs"
        options={{ headerShown: false }}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="Onboarding1"
        options={{ headerShown: false }}
        component={Onboarding1}
      />
      <Stack.Screen
        name="Onboarding2"
        options={{ headerShown: false }}
        component={Onboarding2}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
    </Stack.Navigator>
  );
}
