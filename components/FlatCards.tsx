import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
        <Text style={styles.headingText}>Flat Card</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text style={styles.cardText}>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text style={styles.cardText}>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text style={styles.cardText}>Blue</Text>
            </View>
        </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 5
    },
    cardText: {
        color: "#0f098f",
        fontSize: 16,
        fontWeight: '500'
    },
    cardOne: {
        backgroundColor: "#EF5354"
    },
    cardTwo: {
        backgroundColor: "#50DBB4"
    },
    cardThree: {
        backgroundColor: "#5DA3FA"
    }
})