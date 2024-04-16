import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.container,styles.moving]}>
      <Image source={require('../Images/forest.jpg')}
       style={styles.cardImg}
        />
       <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Blah Blah Palace </Text>
        <Text style={styles.cardLabel}>In Blah Blah location  </Text>
        <Text style={styles.cardDesc}>Lots of Blah Blah and Blah Bhal bhal bhal bhal bhal </Text>
        <Text style={styles.cardLabel}>15 minutes away</Text>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        borderRadius:6,
        

    },
    container:{
        width:400,
        height:360,
        marginHorizontal:16,
        marginVertical:12,
    },
    moving:{
        color:'#fff',
        elevation:4
    },
    cardImg:{
        width:380,
        height:200,
       resizeMode:'cover',
       marginBottom:8,
       borderTopLeftRadius:6,
       borderTopRightRadius:6.
        
        
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardLabel:{
        color:'#000',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardDesc:{
        color:'#10A881' ,
        fontSize:14,
        fontWeight:'bold',
        marginBottom:6,
    },
})