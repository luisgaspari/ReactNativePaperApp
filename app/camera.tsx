import { CameraView, useCameraPermissions } from 'expo-camera'
import { Link } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function Camera() {
    const [permission, reqPermission] = useCameraPermissions()
    if (!permission) return <></>

    let camera: CameraView | null
    const takePicture = async () => {
        if (permission) {
            const photo = await camera?.takePictureAsync()
            console.log(photo)
        }
    }

    return (
        <View style={styles.container}>
            <CameraView facing='back' ref={(ref) => { camera = ref }}
                style={{ width: 310, height: 310 }} />

            <Button mode="contained" style={styles.mt20} onPress={takePicture}>
                Tirar Foto
            </Button>

            <Link style={{ marginTop: 30 }} href="/home">Voltar para Home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#fff',
        padding: 20,
    },
    mt20: {
        marginTop: 20,
        width: 310,
    },
})