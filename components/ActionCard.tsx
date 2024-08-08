import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
   function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
   }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              What's The Experince Of React Native
            </Text>
        </View>
        <Image 
            source={{
                uri: 'https://wallpaperaccess.com/full/3949081.png'
            }}
            style = { styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3} >
            I am a Flutter developer and a college student. I have been working with Flutter and quiet interested in Modile Dev. I have been hearing a about react native and I am quiet interested in it. I want to know what is the experience of react native developers and how is the community of react native. 
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress= {() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress= {() => openWebsite('https://www.linkedin.com/in/omkar-tavva')}
          >
            <Text style={styles.socialLinks}>Let's Connect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16,
    },
    cardElevated: {
      elevation: 4,
      backgroundColor: '#74B9FF',
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: "#67E6DC",
      shadowOpacity: 0.4,
    },
    headerContainer: {
      height: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      color: '#2B2B52',
      fontSize: 18,
      fontWeight: '600',
      textDecorationLine: 'underline'
    },
    cardImage: {
        height: 180
    },
    cardBody: {
      padding: 10
    },
    footerContainer: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    socialLinks: {
      fontSize: 14,
      color: '#2B2B52',
      backgroundColor: '#EAF0F1',
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 8
    }
})