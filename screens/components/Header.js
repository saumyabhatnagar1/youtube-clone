import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Constant from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native' 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from'react-redux';
export default function Header() {

  const {colors}=useTheme()
  const navigation =useNavigation()
  const dispatch=useDispatch()
  const currentTheme=useSelector(state=>{
    return state.darkMode
  })
  return (
    <View style={{height:45,backgroundColor:colors.headerColor,marginTop:Constant.statusBarHeight,flexDirection:'row',justifyContent:'space-between',elevation:4}}>
        <View style={{flexDirection:'row',margin:5}}>
            <Entypo style={{marginLeft:20}} name="youtube" size={28} color="blue" />
            <Text style={{fontSize:22,marginLeft:5,fontWeight:'bold',color:'#212121'}}>MyTube</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',width:150,margin:5}}>
        <Ionicons name="md-camera" size={32} color={colors.iconColor} />
        <Ionicons name="md-search" onPress={()=>{navigation.navigate('Search')}} size={32} color={colors.iconColor} />
        <MaterialIcons name="account-circle" size={32} color={colors.iconColor} onPress={()=>{
          dispatch({type:'change_theme',payload:!currentTheme});
        }} />
        </View>
    </View>
  );
}


