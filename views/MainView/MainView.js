import {useEffect, useRef} from "react"
import {StyleSheet, TouchableOpacity, View} from "react-native"
import Svg, {Path} from "react-native-svg"
import {AutoFocus, Camera, CameraType} from "expo-camera"

export default function MainView({ navigation }) {
    const cameraRef = useRef(null)

    useEffect(() => {
        navigation.reset()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.appbar}>

                {/* 3 Lines */}
                <Svg width="40" height="40" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M3 6.5H18" stroke="#42464A" stroke-width="2" stroke-linecap="round"/>
                    <Path d="M3 11.5H18" stroke="#42464A" stroke-width="2" stroke-linecap="round"/>
                    <Path d="M3 16.5H18" stroke="#42464A" stroke-width="2" stroke-linecap="round"/>
                </Svg>
            </View>

            <Camera
                ref={cameraRef}
                type={CameraType.back}
                autoFocus={AutoFocus.on}
                // whiteBalance={toggleWhiteBalance}
            />
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

    appbar: {
        width: '80%'
    }
})