import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, StatusBar, Text, 
	KeyboardAvoidingView, AsyncStorage} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


export default class LoginForm extends Component {

	render() {
		return ( 
			<View  style = {styles.container}>
				<StatusBar
					barStyle = "light-content"
					/>
				<TextInput
					placeholder = "Username"
					placeholderTextColor = "rgba(255,255,255,1)"
					returnKeyType="next"
					onSubmitEditing={()=>this.passwordInput.focus()}
					autoCapitalize="none"
					autoCorrect = {false}
					style= {styles.input}
				/>
				<TextInput
					placeholder = "Password"
					placeholderTextColor = "rgba(255,255,255,1)"
					secureTextEntry
					returnKeyType="go"
					autoCapitalize="none"
					style= {styles.input}
					ref = {(input)=>this.passwordInput = input}
				/>
				<TouchableOpacity style={styles.buttonContainer} /**/onPress={this.props.login}/**/> 
				<Text style = {styles.buttonText}> Login </Text> 
				</TouchableOpacity>
			</View>	
			
		);
	}
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
  	height: 40,
  	backgroundColor: 'rgba(102,194,255,0.7)',
  	marginBottom: 10,
  	color: '#FFF',
	  fontWeight: 'bold',
	  borderRadius: 30,
  	paddingHorizontal: 10
  },
  buttonContainer:{
	  backgroundColor: '#004D80',
	  borderRadius: 30,
	  paddingVertical: 15
	  
  },
  buttonText:{
  	textAlign: 'center',
  	color:'#FFFFFF',
  	fontWeight: '700'
  }
});