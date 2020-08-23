import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Header from '../components/Header'

const Subscribe =()=>{

    return (
        <View style={{flex:1}}>
            <Header/>
            <Text>This is the subscribe page</Text>
        </View>
    )
}
export default Subscribe