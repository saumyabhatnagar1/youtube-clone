import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Constant from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
export default function Header() {
    
  return (
    <View style={{height:45,backgroundColor:'white',marginTop:Constant.statusBarHeight,flexDirection:'row',justifyContent:'space-between',elevation:4}}>
        <View style={{flexDirection:'row',margin:5}}>
            <Entypo style={{marginLeft:20}} name="youtube" size={28} color="red" />
            <Text style={{fontSize:22,marginLeft:5,fontWeight:'bold',color:'#212121'}}>YouTube</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',width:150,margin:5}}>
        <Ionicons name="md-camera" size={32} color="#212121" />
        <Ionicons name="md-search" size={32} color="#212121" />
        <MaterialIcons name="account-circle" size={32} color="#212121" />
        </View>
    </View>
  );
}


