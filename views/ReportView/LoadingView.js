import {View, StyleSheet, Text, Image, TextInput} from "react-native"

import Loading from '../../assets/img/loading.png'
import LoadingText from '../../assets/img/loadingText.png'
import {LinearGradient} from "expo-linear-gradient"

export default function LoadingView ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contain}>
                    <Image source={LoadingText} style={styles.loadingText} />
                </View>

                <Text style={styles.p}>잠시만 기다려주시면 신고가 완료 됩니다</Text>

                <Image source={Loading} style={styles.loading} />
            </View>

            <LinearGradient colors={['#52C192', '#0C4E30']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.gradient} onTouchEnd={() => navigation.navigate('Call')}>
                <Text style={styles.btnTxt}>돌아가기</Text>
            </LinearGradient>
        </View>
    )
}

const styles= StyleSheet.create({
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

    loadingText: {
        width: 295,
        height: 35,
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
        fontWeight: 600,
        fontSize: 20
    },

    contain: {
        width: '80%',
        flex: 0,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },

    loading: {
        width: 221,
        height: 221,
        flexShrink: 0,
        top: 200
    }
})