import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation'
import React, {Component}  from 'react';
import { StyleSheet, Text, View, Platform,
TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import AuthLoadingScreen from './Login/AuthLoadingScreen'
import Nuevo from './Login/Nuevo';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import HomeScreen from './Logueado/HomeScreen';
import SettingsScreen from './Logueado/SettingsScreen';
import Notas from './Logueado/Notas';

const AuthStackNavigator = createStackNavigator({
  Nuevo: Nuevo,
  Login: Login,
  SignUp: SignUp
})

/**/const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'NOTES',
      tabBarIcon: () => (
        <Icon name="sticky-note-o" size={24} /> //ios-albums
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'CALENDAR',
      tabBarIcon: () => (
        <Icon name="calendar-o" size={24} /> 
      )
    }
  }
})
const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Notes',
      headerLeft:(
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <View style={{paddingHorizontal:10}}> 
            <Icon name= "bars" size= {24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})/*holalgggggaaa*/ 

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator //aca va authstack...
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator

})






