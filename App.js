import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'
import Home from './screens/screen/Home'
import Search from './screens/screen/Search'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './screens/screen/Video'
import Video from './screens/screen/Video';
import Explore from './screens/screen/Explore'
import Subscribe from './screens/screen/Subscribe'
import { MaterialIcons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {reducer} from './screens/reducer/reducers'

const store=createStore(reducer)
const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator()
const RootHome=()=>{
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        }else if(route.name==='Subscribe'){
          iconName='inbox';
        }

        return <MaterialIcons name={iconName} size={24} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }}
    
    >
      <Tabs.Screen name="Home" component={Home}></Tabs.Screen>
      <Tabs.Screen name="Explore" component={Explore}></Tabs.Screen>
      <Tabs.Screen name="Subscribe" component={Subscribe}></Tabs.Screen>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome}></Stack.Screen>
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
        <Stack.Screen name="Video" component={Video}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

      
  );
}


