import { onBoardingCardInterface } from "@/types/onboarding";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"


export default function OnBoardingCard({ title, description,link }: onBoardingCardInterface) {
    const router=useRouter()
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            <View style={styles.pagination}>
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>router.push(link)}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        marginHorizontal: 16,
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 10 },
        elevation: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.7)',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 20,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        gap: 8 as unknown as number, // RN doesn't support gap universally; kept for future platforms
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'rgba(17, 24, 39, 0.15)',
        marginHorizontal: 4,
    },
    activeDot: {
        width: 18,
        backgroundColor: '#4C36ED',
        borderRadius: 3,
    },
    button: {
        backgroundColor: '#2C14DD',
        borderRadius: 28,
        paddingVertical: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
})