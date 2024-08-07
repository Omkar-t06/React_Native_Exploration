import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
        <Text style={styles.headingText}>Flat Card</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card,styles.cardThree]}>
                <Text>Blue</Text>
            </View>
        </View>
    </View>
  )
}

export default FlatCard

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