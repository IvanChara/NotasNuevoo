import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native';

export default class SettingsScreen extends Component{
    signOut = async () =>{
		await AsyncStorage.removeItem('userToken')
		this.props.navigation.navigate('AuthLoading')
	}
    render(){
        return (
            <View style = {styles.container}>
            <Button title="Sign Out" onPress={this.signOut} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#3498db',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
