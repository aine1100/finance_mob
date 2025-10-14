import { StyleSheet, Image,Text, View, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function SuccessLogin() {
    const router = useRouter()

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} barStyle='dark-content' translucent={true} backgroundColor="transparent" />
            <View style={styles.content}>
                <View style={styles.iconWrap}>
                    <Image source={require('../../assets/images/success.svg')} />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.hi}>Hi! <Text style={styles.name}>John</Text></Text>
                    <Text style={styles.welcome}>Welcome to Brees</Text>
                </View>
            </View>

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.9} onPress={() => router.replace('/(tabs)')}>
                    <Text style={styles.primaryBtnText}>Let’s get started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FF',
        paddingHorizontal: 20,
        width: '100%'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24
    },
    iconWrap: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWrap: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    hi: {
        fontSize: 22,
        fontWeight: '600',
        color: '#240F51',
        textAlign: 'center'
    },
    name: {
        fontWeight: '800'
    },
    welcome: {
        marginTop: 6,
        fontSize: 20,
        fontWeight: '600',
        color: '#240F51',
        textAlign: 'center'
    },
    bottomBar: {
        paddingBottom: 20,
        paddingTop: 10
    },
    primaryBtn: {
        backgroundColor: '#2C14DD',
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    primaryBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500'
    }
})