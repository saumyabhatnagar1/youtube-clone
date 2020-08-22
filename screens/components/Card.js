import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
export default function Card() {
  return (
    <View >
        <Image 
        source={{uri:'https://images.unsplash.com/photo-1597526657150-beb8660f635a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}
        style={{width:'100%',
                height:200
            }}
        />
        <View style={{flexDirection:'row',margin:5}}>
        <MaterialIcons name="account-circle" size={32} color="#212121" style={{marginLeft:10}}/>
            <View>
                <Text style={{fontSize:20}} ellipsizeMode="tail" numberOfLines={1} >Saumya Bhatnagar</Text>
                <Text>IIIT Naya Raipur</Text>
            </View>
        </View>
    </View>
  );
}


