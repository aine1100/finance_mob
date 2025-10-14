import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, TextInput, TouchableOpacity, useColorScheme, Platform, StatusBar, View } from "react-native";
import { useEffect, useState } from "react";
import immerse from "react-native-system-navigation-bar";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function Signup() {
    const router = useRouter()
    const scheme = useColorScheme()
    const [isChecked, setIsChecked] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if (Platform.OS === "android") {
            immerse.immersive()
        }
        return () => {
            if (Platform.OS === "android") {
                immerse.leanBack()
            }
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} barStyle='dark-content' translucent={true} backgroundColor="transparent" />
            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => { router.back() }} style={styles.back}>
                        <Ionicons name="arrow-back" size={22} color="#240F51" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Signup</Text>
                    <View style={{ width: 40 }} />
                </View>
                <View style={styles.heroText}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#240F51' }}>Welcome to Brees</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#292B2D' }}>Complete the sign up to get started</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                        placeholder="Louis Real"
                        placeholderTextColor="#A0A0A0"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholder="Louis04real@gmail.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor="#A0A0A0"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholder="********"
                        secureTextEntry={!showPassword}
                        placeholderTextColor="#A0A0A0"
                    />
                    <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(v => !v)}>
                        <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#4C36ED" />
                    </TouchableOpacity>
                </View>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={styles.checkbox}
                        onPress={() => setIsChecked(!isChecked)}
                    >
                        <Ionicons
                            name={isChecked ? 'checkbox-outline' : 'square-outline'}
                            size={24}
                            color={isChecked ? '#4C36ED' : '#4C36ED'} // Checked: blue, Unchecked: white
                        />
                    </TouchableOpacity>
                    <Text style={styles.label}>By signing up, you agree to the <Text style={{ color: '#4C36ED' }}>Terms of Service and Privacy Policy</Text></Text>
                </View>
                <View style={styles.actionsRow}>
                    <TouchableOpacity style={styles.secondaryBtn} activeOpacity={0.8}>
                        <Text style={styles.secondaryBtnText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.8} onPress={()=>router.push("/auth/success")}>
                        <Text style={styles.primaryBtnText}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "100%"
    },
    content: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        paddingTop: 8,
        gap: 12,
        width: "100%"

    },
    headerRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    back: {
        backgroundColor: '#FFFFFF',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3
    },
    title: {
        color: '#292B2D',
        fontSize: 16,
        fontWeight: '500'
    },
    heroText: {
        paddingVertical: 14,
        gap: 4,
        width: '100%'
    },
    inputContainer: {
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 16,
        width: "100%",
        position: 'relative'
    },
    inputLabel: {
        position: 'absolute',
        top: 8,
        left: 16,
        fontSize: 12,
        color: '#8A8A9E',
        fontWeight: '500'
    },
    input: {
        fontSize: 16,
        color: '#240F51',
        height: 44,
        paddingHorizontal: 8,
        paddingTop: 12
    },
    eye: {
        position: 'absolute',
        right: 16,
        top: '50%',
        marginTop: -10,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        marginRight: 10,
    },
    label: {
        fontSize: 15,
        color: '#292B2D',
        fontWeight: '500'
    },
    actionsRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24
    },
    secondaryBtn: {
        backgroundColor: '#E2E2FC',
        borderRadius: 28,
        paddingVertical: 14,
        paddingHorizontal: 22,
    },
    secondaryBtnText: {
        color: '#2C14DD',
        fontSize: 14,
        fontWeight: '600',
    },
    primaryBtn: {
        backgroundColor: '#2C14DD',
        borderRadius: 28,
        paddingVertical: 16,
        paddingHorizontal: 40,
        flexGrow: 1,
        marginLeft: 16,
        alignItems: 'center'
    },
    primaryBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700'
    },
})