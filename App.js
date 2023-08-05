import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import StartView from './views/StartView/StartView'
import NameView from './views/StartView/NameView'
import EmailView from './views/StartView/EmailView'
import CallView from './views/StartView/CallView'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Start'} component={StartView} options={{ headerShown: false }} />
        <Stack.Screen name={'Name'} component={NameView} options={{ headerShown: false }} />
        <Stack.Screen name={'Email'} component={EmailView} options={{ headerShown: false }} />
        <Stack.Screen name={'Call'} component={CallView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}