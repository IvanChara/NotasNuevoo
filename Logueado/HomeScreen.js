import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Nota from './Nota'

export default class HomeScreen extends Component{
    render(){
        return (
        <View style = {styles.container}>
           
           <Nota />
        </View>
        );
    }//<Text>hola</Text> 

}

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#51E4FE',
     // alignItems: 'center',
    //  justifyContent: 'center',
    },
  });
