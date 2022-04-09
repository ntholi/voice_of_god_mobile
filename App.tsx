import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TrainingCenter from './screens/TrainingCenter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Details' component={TrainingCenter} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
