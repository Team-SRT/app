import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage"
import {View, StyleSheet, Text, Image, TextInput} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import Svg, {G, Path} from "react-native-svg"

import Complete from '../../assets/img/complete.png'
import Check from '../../assets/img/check.png'

export default function CompleteView ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.appbar}>
                    <View onTouchEnd={() => navigation.goBack()} style={styles.arrow}>
                        {/* Arrow */}
                        <Svg width="40" height="35" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G id="chevron-left">
                                <Path id="Vector" d="M14.6667 17.9166L7.33334 11.5L14.6667 5.08331" stroke="#42464A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </G>
                        </Svg>
                    </View>
                    <Text style={styles.step}>4 / 4</Text>
                </View>

                <View style={styles.contain}>
                    <Image source={Complete} style={styles.name} />
                </View>

                <Text style={styles.p}>지금부터 간편한 신고 서비스 SRT를 이용해주세요</Text>

                <Image source={Check} style={styles.check} />
            </View>

            <LinearGradient colors={['#85F4FF', '#0CF']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.gradient} onTouchEnd={async () => navigation.navigate('Main')}>
                <Text style={styles.btnTxt}>완료하기</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F6F8'
    },

    header: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F6F8',
        marginBottom: 300
    },

    appbar: {
        width: '85%',
        flex: 0,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },

    step: {
        fontSize: 23,
        fontWeight: 800,
        color: '#42464A'
    },

    contain: {
        width: '80%',
        flex: 0,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },

    name: {
        width: 310,
        height: 35,
    },

    text: {
        fontSize: 32,
        fontWeight: 900
    },

    p: {
        width: '80%',
        fontSize: 15,
        color: '#5F666D'
    },

    textField: {
        width: '80%',
        height: 60,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C6CFD7',
        marginTop: 60,
        paddingLeft: 20
    },

    gradient: {
        width: '90%',
        height: 70,
        borderRadius: 20,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },

    btnTxt: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 20
    },

    check: {
        width: 220,
        height: 220,
        marginTop: 130,
        marginBottom: -200
    }
})