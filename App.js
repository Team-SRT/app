import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import StartView from './views/StartView/StartView'
import NameView from './views/StartView/NameView'
import EmailView from './views/StartView/EmailView'
import CallView from './views/StartView/CallView'
import DoneView from "./views/ReportView/DoneView";
import ErrorView from "./views/ReportView/ErrorView";
import LoadingView from "./views/ReportView/LoadingView";

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Done'} component={LoadingView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}