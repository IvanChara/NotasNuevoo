import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator,
DrawerItems} from 'react-navigation'
import React, {Component}  from 'react';
import { StyleSheet, Text, View, Platform,Image, 
TouchableOpacity, SafeAreaView, ScrollView, Dimensions, AsyncStorage} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import AuthLoadingScreen from './Login/AuthLoadingScreen'
import Nuevo from './Login/Nuevo';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import HomeScreen from './Logueado/HomeScreen';
import SettingsScreen from './Logueado/SettingsScreen';
import Nota from './Logueado/Nota';
import CalendarScreen from './Logueado/CalendarScreen';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createMaterialTopTabNavigator} from 'react-navigation'
import * as firebase from 'firebase'


/*const firebaseConfig = {
  apiKey: "AIzaSyBCKZ1tyUWCnBufZ-DD_DOhL6UuXtZgvOA",
    authDomain: "notes-4016c.firebaseapp.com",
    databaseURL: "https://notes-4016c.firebaseio.com",
    projectId: "notes-4016c",
    storageBucket: "notes-4016c.appspot.com",
};
firebase.initializeApp(firebaseConfig);
*/

_storeData = async () => {
  try {
      await AsyncStorage.removeItem('userToken')  
     } 
  catch (error) {
      console.warn("error")
     } 
   } 


const AuthStackNavigator = createStackNavigator({
  Nuevo: Nuevo,
  Login: Login,
  SignUp: SignUp
})

/**/const AppTabNavigator = createMaterialTopTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Notes',
      tabBarIcon: ({tintColor}) => (
        <Icon name="sticky-note-o" size={24} /> 
      )
    } 
  },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: {
      
      tabBarLabel: 'Calendar' ,
      tabBarIcon: ({tintColor}) => (
        <Icon name="calendar-o" size={24} /> 
      )
    } 
  } 
}, 

{
    initialRouteName: 'HomeScreen',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
      style:{
        backgroundColor: '#f2f2f2'
      },
      showIcon: true,
      showLabel: false,
      indicatorStyle:{opacity: 0} 
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
      ),
      headerRight:(
        <TouchableOpacity onPress={()=>navigation.navigate('Nota')}>
          <View style={{paddingHorizontal:10}}> 
            <Icon name= "edit" size= {24} />
          </View>
        </TouchableOpacity>
        
      )
    })
  }
}) 
 
const CustomDrawerComponent = (props) => (

  <SafeAreaView style = {{flex: 1}}>
    <View style = {{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
       <Image source={require('./Login/writing.png')} style={{height: 120, width: 120}}/>
    </View>
    
    <ScrollView>  
      <DrawerItems {...props}/>        
    </ScrollView> 
    <View style={{paddingHorizontal: 10, marginBottom: 10}}> 
        <TouchableOpacity style={{backgroundColor: '#51E4FE',borderRadius: 30,paddingVertical: 15,alignItems: 'center', paddingHorizontal: 10}} 
        onPress={()=>{
          this._storeData() 
          props.navigation.navigate('AuthLoading')
         } 
        }>  
				    <Text style={{color: 'white', fontWeight: 'bold'}}> Sign out </Text> 
				</TouchableOpacity>  
    </View>
  </SafeAreaView> 
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
},{
contentComponent: CustomDrawerComponent

}) 

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
  Nota: Nota

}) 

