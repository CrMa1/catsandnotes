import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NewNote, SavedNote} from '../screens/Index';

const Stack = createNativeStackNavigator();

function StackNoteNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="New" component={NewNote} />
      <Stack.Screen name="Saved" component={SavedNote} />
    </Stack.Navigator>
  );
}

export default StackNoteNavigator
