import React, { useState } from 'react';
import {Stylesheet,View,Text,TextInput, ScrollView,FlatList,ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import SearchCard from '../components/searchCard'
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=kashi&type=video&key=AIzaSyBqTgh_vCdmrHQJEdz4jVhZ0TBtqiEZrLY

const SearchScreen=()=>{
 const [value,setValue]=useState('')
 const [searchCardata,setsearchCard]=useState('');
 const [loading,setloading]=useState('')
 const fetchVideo=()=>{
     setloading(true)
     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBqTgh_vCdmrHQJEdz4jVhZ0TBtqiEZrLY
     `).then(res=>res.json()).then((data=>{
         console.log(data)
         setsearchCard(data.items)
         setloading(false);
    }))
 }

    return (
        <View style={{flex:1}}>
            <View style={{
                padding:5,
                flexDirection:'row',
                justifyContent:'space-around',
                elevation:2,
                backgroundColor:'white'
            }}>

            <AntDesign name="back" size={24} color="black" />
            <TextInput
            style={{width:'70%',
            backgroundColor:'#e6e6e6',
            }}
            value={value}
            onChangeText={(text)=>{
                setValue(text)
            }}
            />
            <Feather name="send" size={24} color="black" onPress={()=>fetchVideo()} />
            
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