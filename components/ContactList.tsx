import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled= {false}
      >
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key = {uid} style = { styles.userCard}>
                <Image 
                    source={{uri: imageUrl}}
                    style={styles.userImage}
                />
                <View>
                  <Text style = {styles.userName}>{name}</Text>
                  <Text style = { styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
      paddingHorizontal: 16,
      marginBottom: 4
    },
    userCard: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
      padding: 7,
      backgroundColor: "#0A3D62",
      borderRadius: 6,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
    },
    userName: {
      fontSize: 16,
      fontWeight: "600",
      color: "#FFF"
    },
    userStatus: {

    },
})