import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Header from '../components/Header'
const Explore =()=>{

    return (
        <View style={{flex:1}}>
            <Header/>
            <Text>This is not the explore page</Text>
        </View>
    )
}
export default Explore