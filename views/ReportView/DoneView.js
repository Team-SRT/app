import {View, StyleSheet, Text, Image, TextInput} from "react-native"

import Check from '../../assets/img/check.png'
import Report from '../../assets/img/report.png'
import {LinearGradient} from "expo-linear-gradient"

export default function DoneView ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>4
                <View style={styles.contain}>
                    <Image source={Report} style={styles.report} />
                </View>

                <Text style={styles.p}>지금부터 간편한 신고 서비스 SRT를 이용해주세요</Text>
            </View>

            <Image source={Check} style={styles.check} />

            <LinearGradient colors={['#85F4FF', '#0CF']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.gradient} onTouchEnd={() => navigation.navigate('Call')}>
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

    report: {
        width: 80,
        height: 30,
    },

    text: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    p: {
        width: '80%',
        fontSize: 15,
        color: '#5F666D'
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
        fontWeight: "600",
        fontSize: 20
    },

    check: {

    }
})