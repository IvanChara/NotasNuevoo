import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Nuevo extends React.Component {
  render() {
    return (
        
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo} 
            source={require('./writing.png')} 
            />
          <Text style={styles.bigwhite}> Notes </Text> 
        </View>
        <View style = {styles.espacio}>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Login')}> 
			<Text style = {styles.buttonText}> Login </Text> 
		</TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('SignUp')}> 
			<Text style = {styles.buttonText}> Sign Up </Text> 
		</TouchableOpacity>
        </View>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 40
  },
  espacio: {
    flex : 1.5,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoContainer: {

    alignItems: 'center',
    flexGrow: 1,
     
  },
  logo:{
    width: 200,
    height: 200
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
  },
  bigwhite: {
    color: '#66C2FF',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
