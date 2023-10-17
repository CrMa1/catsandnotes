import { StyleSheet, View } from 'react-native'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHomeNavigator from './StackHomeNavigator';
import StackNoteNavigator from './StackNoteNavigator';
import StackSettingsNavigator from './StackSettingsNavigator';
import Feather from '@expo/vector-icons/Feather'

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="BottomHome"
        component={StackHomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="home" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={StackNoteNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="plus-circle" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={StackSettingsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="settings" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.orangeWhite,
    paddingTop: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  iconContainer: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
})