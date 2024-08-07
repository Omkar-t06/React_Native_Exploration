import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>Me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>To</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>More...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>Just</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>For</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
          <Text style={styles.cardText}>Fun</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowColor: '#333',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  cardText: {
    color: "#0f098f",
    fontSize: 16,
    fontWeight: '500'
  },
})