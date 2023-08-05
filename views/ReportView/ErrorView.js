import {View, StyleSheet, Text, Image, TextInput} from "react-native"

import Error from '../../assets/img/error.png'
import ErrorText from '../../assets/img/errorText.png'
import {LinearGradient} from "expo-linear-gradient"

export default function ErrorView ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.contain}>
                    <Image source={ErrorText} style={styles.errorText} />
                </View>

                <Text style={styles.p}>error code:504</Text>

                <Image source={Error} style={styles.error} />
            </View>

            <LinearGradient colors={['#F86060', '#860E0E']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.gradient} onTouchEnd={() => navigation.navigate('Call')}>
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

    errorText: {
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

    error: {
        width: 221,
        height: 221,
        flexShrink: 0,
        top: 200
    }
})