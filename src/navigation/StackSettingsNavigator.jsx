import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from '../screens/Index';

const Stack = createStackNavigator();

function StackSettingsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Settings} />
    </Stack.Navigator>
  );
}

export default StackSettingsNavigator