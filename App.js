import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import StartView from './views/StartView/StartView'
import NameView from './views/StartView/NameView'
import EmailView from './views/StartView/EmailView'
import CallView from './views/StartView/CallView'
import DoneView from "./views/ReportView/DoneView"
import ErrorView from "./views/ReportView/ErrorView"
import CompleteView from './views/StartView/CompleteView'
import MainView from './views/MainView/MainView'
import LoadingView from "./views/ReportView/LoadingView";

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Start'} component={StartView} options={{ headerShown: false }} />
        <Stack.Screen name={'Name'} component={NameView} options={{ headerShown: false }} />
        <Stack.Screen name={'Email'} component={EmailView} options={{ headerShown: false }} />
        <Stack.Screen name={'Call'} component={CallView} options={{ headerShown: false }} />
        <Stack.Screen name={'Complete'} component={CompleteView} options={{ headerShown: false }} />
        <Stack.Screen name={'Main'} component={MainView} options={{ headerShown: false }} />
        <Stack.Screen name={'Done'} component={DoneView} options={{ headerShown: false }} />
        <Stack.Screen name={'Error'} component={ErrorView} options={{ headerShown: false }} />
        <Stack.Screen name={'Loading'} component={LoadingView} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}