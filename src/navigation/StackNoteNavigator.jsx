import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewNote from '../screens/Notes/NewNote';

const Stack = createNativeStackNavigator();

function StackNoteNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="New" component={NewNote} />
    </Stack.Navigator>
  );
}

export default StackNoteNavigator
