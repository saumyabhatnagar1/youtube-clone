import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'
import Home from './screens/screen/Home'
import Search from './screens/screen/Search'
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './screens/screen/Video'
import Video from './screens/screen/Video';
import Explore from './screens/screen/Explore'
import Subscribe from './screens/screen/Subscribe'
import { MaterialIcons } from '@expo/vector-icons';
import {Provider, useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux';
import {reducer} from './screens/reducer/reducers'
import {themeReducer} from './screens/reducer/theme'

const rootReducer=combineReducers({
  carddata:reducer,
  darkMode:themeReducer
})
const store=createStore(rootReducer)
const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator()

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'#404040',
    iconColor:'white',
    tabColour:'white'
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:'white',
    iconColor:'black',
    tabColour:'blue',
  }
}

const RootHome=()=>{

  const {colors} =useTheme()
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
      activeTintColor: colors.tabColour,
      inactiveTintColor: 'gray',
    }}
    
    >
      <Tabs.Screen name="Home" component={Home}></Tabs.Screen>
      <Tabs.Screen name="Explore" component={Explore}></Tabs.Screen>
      <Tabs.Screen name="Subscribe" component={Subscribe}></Tabs.Screen>
    </Tabs.Navigator>
  )
}
export default ()=>{
  return (

    <Provider store={store}>
      <App/>
    </Provider>
    )
}

export  function App() {
  let darkMode=useSelector(state=>{
      return state.darkMode
  })

  //cannot use useSelector with the provider tag
  return (
    
    <NavigationContainer theme={!darkMode?customDarkTheme:customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome}></Stack.Screen>
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
        <Stack.Screen name="Video" component={Video}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>


      
  );
}


