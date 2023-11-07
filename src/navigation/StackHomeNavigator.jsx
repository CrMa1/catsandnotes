import { Home, Notes } from '../screens/Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackHomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="Edit" component={Notes} />
    </Stack.Navigator>
  );
}

export default StackHomeNavigator
