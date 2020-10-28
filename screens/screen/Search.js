import React, { useState } from 'react';
import {Stylesheet,View,Text,TextInput, ScrollView,FlatList,ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import SearchCard from '../components/searchCard'
import  {useNavigation ,useTheme} from '@react-navigation/native'
import Header from '../components/Header'
import Constant from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'
const SearchScreen=()=>{
 const [value,setValue]=useState('')
 //const [searchCardata,setsearchCard]=useState('');
 const searchCardata=useSelector(state=>{
     return state.carddata
 })
 const dispatch=useDispatch()

 const [loading,setloading]=useState('')
 const navigation= useNavigation('')
 const fetchVideo=()=>{
     setloading(true)
     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBqTgh_vCdmrHQJEdz4jVhZ0TBtqiEZrLY
     `).then(res=>res.json()).then((data=>{
         //console.log(data)
         dispatch({type:"add",payload:data.items})
         //setsearchCard(data.items)
         setloading(false);
    }))
 }
 const {colors}=useTheme()
 const iconColor=colors.iconColor

    return (
        <View style={{flex:1}}>
            <View style={{
                padding:5,
                flexDirection:'row',
                justifyContent:'space-around',
                elevation:2,
                backgroundColor:colors.headerColor,
                marginTop:Constant.statusBarHeight
            }}>
            

            <AntDesign name="back" color={iconColor} onPress={()=>{navigation.goBack()}} size={24}  />
            <TextInput
            style={{width:'70%',
            backgroundColor:'white',
            }}
            value={value}
            onChangeText={(text)=>{
                setValue(text)
            }}
            />
            <Feather name="send" size={24} color={iconColor} onPress={()=>fetchVideo()} />
            
            </View>
            {loading ? <ActivityIndicator size='large' color='red'/>:null}
            <FlatList
            data={searchCardata}
            renderItem={({item})=>{
                return <SearchCard 
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
            keyExtractor={(item)=>{item.id.videoId}}
            />
        </View>
    )


}
export default SearchScreen