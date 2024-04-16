import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MovingCard() {
  return (
    <View>
      <Text style={styles.headingText}>MovingCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.moving]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.moving]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.moving]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.moving]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.moving]}>
            <Text>More </Text>
        </View>
        <View style={[styles.card,styles.moving]}>
            <Text>And</Text>
        </View>
        <View style={[styles.card,styles.moving]}>
            <Text>More</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
   headingText:{
     fontSize:24,
     fontWeight:'bold',
     paddingHorizontal:10
   },
   container:{
     padding:8,
   },
   card:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     width:100,
     height:100,
     borderRadius:4,
     margin:8,
   },
   moving:{
    backgroundColor:'purple',
    elevation:4
   },
})