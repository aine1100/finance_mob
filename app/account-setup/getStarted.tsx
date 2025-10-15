import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, useColorScheme, Platform, StatusBar, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import immerse from "react-native-system-navigation-bar"
import GetStartedCard from '@/components/auth/card';

export default function getStartedPageAccountSetup() {
    const scheme = useColorScheme()
    const router=useRouter()

    useEffect(() => {
        if (Platform.OS == "android") {
            immerse.immersive()
        }

        return () => {
            if (Platform.OS == "android") {
                immerse.leanBack()
            }
        }
    }, [])

    const cardData = [
        {
            title: "Verify your email address",
            description: "This is the bank account we would track and manage your spendings",
            image: require("@/assets/get/4.png")
        }, {
            title: "Connect your bank account",
            description: "This is the bank account we would track and manage your spendings",
            image: require("@/assets/get/5.svg")
        }, {
            title: "Setup a security pin",
            description: "This is the bank account we would track and manage your spendings",
            image: require("@/assets/get/6.svg")
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} barStyle='light-content' translucent={true} backgroundColor="transparent" />
            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <View style={{ width: 1 }} />
                    <TouchableOpacity style={styles.skipBtn} onPress={()=>{router.replace('/account-setup/setupAccount')}}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>Get started</Text>
                    <Text style={styles.subtitle}>Get most out of your Brees account</Text>
                </View>

                <ScrollView
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                >
                    {cardData.map((item, index) => (
                        <View key={index} style={styles.cardItem}>
                            <GetStartedCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C36ED',
    },
    content: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 24,
    },
    headerRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    skipBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    skipText: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 14,
    },
    header: {
        marginTop: 12,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        fontWeight:'500',
        color: 'rgba(255,255,255,0.85)',
    },
    listContent: {
        paddingBottom: 32,
        gap: 14,
    },
    cardItem: {
        width: '100%',
    },
    imagesContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#4C36ED',
        fontSize: 16,
        fontWeight: '600',
    },
    skipButton: {
        padding: 12,
    },
});