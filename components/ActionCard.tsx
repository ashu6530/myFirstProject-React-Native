import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.container]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText} > Again Lots of Blah Blah Blah and Blah  </Text>
        </View>
        <Image 
        source={require('../Images/bhoot.jpg')}
        style={[styles.cardImg]}
        />
        <View style={[styles.cardBody]}>
            <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Assumenda aliquam placeat in corrupti 
                voluptates veniam veritatis quas sed nostrum saepe.</Text>
        </View>
        <View style={styles.cardFooter}>
            <TouchableOpacity onPress={()=>openWebsite('https://ashutosh-rajput.netlify.app/')}>
                <Text  style={styles.links} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('https://ashutosh-rajput.netlify.app/')}>
                <Text  style={styles.links}>Follow Me</Text>
            </TouchableOpacity>
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
        width:350,
        height:340,
        borderRadius:6,
        marginHorizontal:16,
        marginVertical:12,
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImg:{
        width:380,
        height:190,
        resizeMode:'cover',
        overflow:'hidden'
        
    },
    cardBody:{
        padding:10
    },
    cardFooter:{
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    links:{
        fontSize:16,
        color:'white',
        backgroundColor:'orange',
        paddingHorizontal:20,
        paddingVertical:4,
        borderRadius:8
    },
})