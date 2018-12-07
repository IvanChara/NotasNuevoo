import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native';
import {Header, Left, Right,Icon} from 'native-base'

export default class SettingsScreen extends Component{
    /*signOut = async () =>{
		await AsyncStorage.removeItem('userToken')
		this.props.navigation.navigate('AuthLoading')
	}*/
    render(){
        return (
            
          //  <Button title="Sign Out" onPress={this.signOut} />
            <View style = {styles.container}>
                <Header> 
                    <Left>
                        <Icon name="menu" onPress={()=>this.props.navigation.openDrawer}/>
                    </Left>
                </Header>
                <View style = {{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Text>Ajustes</Text> 
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });
