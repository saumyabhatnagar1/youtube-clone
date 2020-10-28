import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import {useNavigation,useTheme} from '@react-navigation/native'


export default function Card  (props) {
  const navigation=useNavigation('')
  const {colors} =useTheme()
  const textColor=colors.iconColor
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Video',{videoId:props.videoId,title:props.title})}}>

    <View style={{marginBottom:10}} >
        <Image 
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={{width:'100%',
        height:200
      }}
      />
        <View style={{flexDirection:'row',margin:5}}>
        <MaterialIcons name="account-circle" size={32} style={{marginLeft:10}}/>
            <View>
                <Text style={{fontSize:20,color:textColor}} ellipsizeMode="tail" numberOfLines={1} >{props.title}</Text>
                <Text style={{color:textColor}}  >{props.channel}</Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
  );
}


