import {Button, Image, StyleSheet, Text, View} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import Logo from '../../assets/img/logo2.png'

export default function StartView ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <LinearGradient colors={['#85F4FF', '#0CF']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.gradient} onTouchEnd={() => navigation.navigate('Name')}>
        <Text style={styles.text}>시작하기</Text>
      </LinearGradient>
      <Text style={styles.p}>도움말 보기</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6F8'
  },

  header: {
    flex: 1,
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200
  },

  gradient: {
    width: '90%',
    height: 70,
    borderRadius: 20,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 20
  },

  p: {
    fontSize: 15,
    color: 'gray',
    marginTop: 20,
    marginBottom: 60
  },

  title: {
    fontSize: 40,
    fontWeight: 600
  }
})