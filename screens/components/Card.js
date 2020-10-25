import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
export default function Card() {
  return (
    <View style={{marginBottom:10}} >
        <Image 
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={{width:'100%',
                height:200
            }}
        />
        <View style={{flexDirection:'row',margin:5}}>
        <MaterialIcons name="account-circle" size={32} color="#212121" style={{marginLeft:10}}/>
            <View>
                <Text style={{fontSize:20}} ellipsizeMode="tail" numberOfLines={1} >{props.title}</Text>
                <Text>{props.channel}</Text>
            </View>
        </View>
    </View>
  );
}


