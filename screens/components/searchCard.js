import React, { useState } from 'react';
import {Stylesheet,View,Text,TextInput,Image,Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

const SearchCard=(props)=>{


    return (
        <View style={{flexDirection:'row',margin:10,marginBottom:5}}>
            <Image 
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={{width:'45%',
                height:100
            }}
            />
        <View style={{paddingLeft:10,flex:1}}>
            <Text style={{fontSize:15,width:'100%'}} ellipsizeMode="tail" numberOfLines={3}>
            {props.title}</Text>
            <Text style={{fontSize:12}}>
                {props.channel}
            </Text>
        </View>
        </View>
    )   
}
export default SearchCard;