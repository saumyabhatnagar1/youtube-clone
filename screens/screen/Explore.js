import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView ,FlatList,_ScrollView} from 'react-native';
import Header from '../components/Header'
import SearchCard from '../components/searchCard'
import {useSelector} from 'react-redux'

const Smallcard = ({ name }) => {
    return (
        <View style={{
            backgroundColor: 'blue',
            width: 180,
            borderRadius: 4,
            height: 50,
            marginTop: 5,
            marginTop: 10
        }}>
            <Text
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 22
                }}
            >{name}</Text>
        </View>

    )
}

const Explore = () => {
const cardData=useSelector(state=>{
    return state
})
 
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>

            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                <Smallcard name="Gaming" />
                <Smallcard name="Trending" />
                <Smallcard name="Music" />
                <Smallcard name="News" />
                <Smallcard name="Movies" />
                <Smallcard name="Bollywood" />
            </View>

            <Text style={{
                margin: 8,
                borderBottomWidth: 1,
                fontSize: 22
            }}>Trending Videos</Text>
            <FlatList
                data={cardData}
                renderItem={({ item }) => {
                    return <SearchCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item => item.id.videoId}
                />
                </ScrollView>
        </View>
    )
}
export default Explore