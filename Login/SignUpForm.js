import React, { Component } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, StatusBar, Text, KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase'


export default class SignUpForm extends Component {
/*	constructor(props){
		super(props)
		this.state=({
			email: '',
			password: ''
		})
	}
	signUpUser=(email,password)=>{
		try{
			if(this.state.password.length<6){
				alert("Please enter at least 6 characters")
				return;
			}
			firebase.auth().createUserWithEmailAndPassword(email,password)
		}
		catch(error){
			console.log(error.toString())
		}
	}*/
	render() {
		return ( 
			<View  style = {styles.container}>
				<StatusBar
					barStyle = "light-content"
					/>
                <TextInput
					placeholder = "Email"
					placeholderTextColor = "rgba(255,255,255,1)"
					returnKeyType="next"
					onSubmitEditing={()=>this.passwordInput.focus()}
					autoCapitalize="none"
                    autoCorrect = {false}
                    keyboardType="email-address"
					style= {styles.input}
				//	onChangeText={(email)=>this.setState({email})}
				/>

                
                <TextInput
					placeholder = "Password"
                    placeholderTextColor = "rgba(255,255,255,1)"
                    secureTextEntry
                    returnKeyType="next"
                    onSubmitEditing={()=>this.RpasswordInput.focus()}
					autoCapitalize="none"
					autoCorrect = {false}
                    style= {styles.input}
					ref = {(input)=>this.passwordInput = input}
					//onChangeText={(password)=>this.setState({password})}
				/>
				<TextInput
					placeholder = "Retype Password"
					placeholderTextColor = "rgba(255,255,255,1)"
					secureTextEntry
					returnKeyType="go"
					autoCapitalize="none"
					style= {styles.input}
					ref = {(input)=>this.RpasswordInput = input}
				/>
                    <TouchableOpacity style={styles.buttonContainer}
					/*onPress={()=>this.signUpUser(this.state.email, this.state.password)}*/> 
                    <Text style = {styles.buttonText}> Sign Up </Text> 
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
