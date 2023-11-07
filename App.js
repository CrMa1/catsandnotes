import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation/MainNavigtor';
import { init,deleteSession } from './src/db';

init()
  .then(() => console.log('DB initialized'))
  .catch(err => console.log('DB failed', err.message))
  
export const navigationRef = createNavigationContainerRef()
  
export default function App() {
  return (
    <Provider store={ store }>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}