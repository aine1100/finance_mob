import { getStarted } from "@/types/getStarted";
import { View, Text, Image, StyleSheet } from "react-native";

export default function GetStartedCard({ title, description, image }: getStarted) {
    return (
        <View style={styles.outer}>
            <View style={styles.card}>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Image source={image} style={styles.image} resizeMode="contain" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outer: {
        backgroundColor: '#432DEC',
        borderRadius: 24,
    },
    card: {
        backgroundColor: '#432DEC',
        borderRadius: 20,
        paddingVertical: 18,
        paddingHorizontal: 18,
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: 110,
    },
    textWrap: {
        paddingRight: 96,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
    },
    description: {
        color: '#ECEAFD',
        fontSize: 12,
        lineHeight: 18,
    },
    image: {
        position: 'absolute',
        right: 8,
        bottom: -6,
        width: 110,
        height: 110,
    },
})