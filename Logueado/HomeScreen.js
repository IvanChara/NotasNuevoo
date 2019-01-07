import React, {Component} from 'react';
import {
    View,
    Text, TouchableOpacity,
    StyleSheet, Dimensions
} from 'react-native';
import Nota from './Nota'
import Test from './test'
export default class HomeScreen extends Component{
   
    render(){
        return (
        <View style = {styles.container}>
            <View>
                  
                <Text>Notas...</Text>
            </View>
            
        </View>
        
        
        );
    }

}

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#51E4FE',
     alignItems: 'center',
    justifyContent: 'center',
    },
    nota: {
        backgroundColor: 'white',
        marginLeft: 20,
        marginTop: 20,
        justifyContent: 'center', 
        alignItems:'center',
        height: 60,
        width: Dimensions.get('window').width -40,
        borderRadius: 30
    }
  });
