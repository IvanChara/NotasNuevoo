import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default class HomeScreen extends Component{
    render(){
        return (
        <View style = {styles.container}>
           
           <Text>Notas...</Text> 
        </View>
        );
    }//<Text>hola</Text>   <Nota />

}

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#51E4FE',
     // alignItems: 'center',
    //  justifyContent: 'center',
    },
  });
