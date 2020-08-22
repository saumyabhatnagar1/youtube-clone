import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'
import Home from './screens/screen/Home'
import Search from './screens/screen/Search'
export default function App() {
  return (
    <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
      <Search/>
    </View>
  );
}


