import {useEffect, useRef, useState} from "react"
import {Alert, Image, StyleSheet, TouchableOpacity, View} from "react-native"
import Svg, {   Path} from "react-native-svg"
import {Camera} from "expo-camera"

import Capture from '../../assets/img/wave.png'
import axios from "axios";

export default function MainView({ navigation }) {
    const [camera, setCamera] = useState(null)
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [image, setImage] = useState()

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }
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

            <View style={styles.cameraContain}>
                <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setType(Camera.Constants.Type.back);
                            }}>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>

            <View onTouchEnd={async () => {
                console.log('snap!')
                if(camera){
                    const data = await camera.takePictureAsync(null)
                    setImage(data.uri)
                    console.log(data.uri)

                    setTimeout(() => {}, 1000)
                    navigation.navigate('Loading')

                    // const toPy = new FormData()
                    // toPy.append('file', data.uri)
                    //
                    // axios.post('http://15.164.217.71:1234/classify_image', data.uri)
                    //     .then(resp => console.log(resp.data))
                }
            }}>
                <Image source={Capture} style={styles.capture} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F4F6F8'
    },

    appbar: {
        width: '80%',
        marginTop: '20%'
    },

    camera: {
        flex: 1,
        width: '100%',
        height: 400
    },

    cameraContain: {
        width: '80%',
        height: 400,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 20
    },

    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },

    capture: {
        width: 80,
        height: 80,
        marginTop: '30%'
    }
})