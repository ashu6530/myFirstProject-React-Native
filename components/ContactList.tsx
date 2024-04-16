import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const data = [
        {
          uid: "abc123",
          name: "John",
          status: "active",
          url:'https://picsum.photos/id/237/200/300'
        },
        {
          uid: "def456",
          name: "Jane",
          status: "inactive",
          url: "https://images.pexels.com/photos/18130613/pexels-photo-18130613/free-photo-of-birds-flying-over-junction-in-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          uid: "ghi789",
          name: "Alice",
          status: "pending",
          url: "https://images.pexels.com/photos/20882949/pexels-photo-20882949/free-photo-of-young-woman-sitting-next-to-green-plants.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
          uid: "jkl012",
          name: "Bob",
          status: "active",
          url: "https://images.pexels.com/photos/19519094/pexels-photo-19519094/free-photo-of-a-woman-in-plaid-jacket-leaning-against-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      ];
      
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {data.map(({uid,name,status,url}) =>(
            <View key={uid} style={styles.userCard}>
                 <Image
            source={{
                uri:url
            }}
            style={styles.userImg}
            />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>
            
            </View>
           
        ) )}
      </ScrollView>
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
    paddingHorizontal:16,
    marginBottom:8,
  },
  userCard:{
    flex:1,
    padding:4,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'blue',
    marginBottom:4,
    borderRadius:10,
  },
  userImg:{
    height:60,
    width:60,
    borderRadius:60/2,
    marginRight:14,
  },
  userName:{
    fontSize:16,
    color:'#000',
    fontWeight:'600',
},
  userStatus:{
    fontSize:12,
    color:'#000',
    fontWeight:'400',
  }
})