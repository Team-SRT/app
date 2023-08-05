import {ImageBackground, View, StyleSheet, Text, Image, TextInput} from "react-native"

import Setting from '../../assets/img/Setting.png'
import SideBarButton from '../../assets/img/SideBarButton.png'
import AlarmSetting from '../../assets/img/ReportAlarm.png'
import PrivacySetting from '../../assets/img/PrivarcySetting.png'
import ReportSetting from '../../assets/img/ReportSetting.png'
import ButtonToggleOn from '../../assets/img/ButtonToggleOn.png'
import ButtonToggleOff from '../../assets/img/ButtonToggleOff.png'
import {LinearGradient} from "expo-linear-gradient"
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export default function SettingView ({ navigation }) {
    return (
        <ImageBackground source={Setting} resizeMode="cover" style={styles.container}>
            <Image source={SideBarButton} style={styles.siderbarbutton}
                   onTouchEnd={async () => {
                       navigation.navigate('Main')
                   }}
            />
        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    siderbarbutton: {
        position: 'absolute',
        width: 25,
        height: 25,
        top: 88,
        left: 27
    },

    s2: {
        position: 'absolute',
        width: 335,
        height: 56,
        top: 132,
        left: 25
    },

    s3: {
        position: 'absolute',
        width: 335,
        height: 56,
        top: 216,
        left: 25
    },

    s4: {
        position: 'absolute',
        width: 335,
        height: 56,
        top: 300,
        left: 25
    },

    s5: {
        position: 'absolute',
        width: 50,
        height: 30,
        top: 296,
        left: 313
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

    check: {
        width: 220,
        height: 220,
        flexShrink: 0,
        marginTop: 130,
        marginBottom: -200
    }
})