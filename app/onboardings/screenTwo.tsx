import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, useColorScheme, Platform, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import OnBoardingCard from '@/components/onboarding/card';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import immerse from "react-native-system-navigation-bar"

export default function onBoardingTwo() {
    const scheme=useColorScheme()
    const insets=useSafeAreaInsets()

    useEffect(()=>{
        if(Platform.OS=="android"){
            immerse.immersive()
        }

        return ()=>{
            if(Platform.OS=="android"){
                immerse.leanBack()
            }
        }
    },[])
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} barStyle='light-content' translucent={true} backgroundColor="transparent" />
            <View style={styles.content}>
                <View style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        borderRadius: 20,
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                    }}>
                        <Text style={{ color: '#fff', fontWeight: '200', fontSize: 15 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.imagesContainer}>
                    
                    <Image
                        source={require('../../assets/images/3.png')}
                        style={[styles.image, styles.secondImage]}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.cardWrapper}>
                    <OnBoardingCard
                        title='Gain total control of your money'
                        description='Track your transaction easily ,with categories and financial reports'
                        link={'/onboardings/screenThree'}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C36ED',
        paddingVertical:24,
        paddingHorizontal:5,
        width:"100%"
    },
    content: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
    imagesContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        height: height * 0.5,
        resizeMode: 'contain',
    },
    firstImage: {
        width: width * 0.5,
        marginRight: -width * 0.3, // Overlap the images slightly
        zIndex: 2,
        transform: [{ rotate: '-5deg' }],
    },
    secondImage: {
        width: width * 0.6,
        zIndex: 1,
        transform: [{ rotate: '5deg' }],
    },
    cardWrapper: {
        paddingBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    pagination: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#FFFFFF',
        width: 24,
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
    skipText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
    },
});