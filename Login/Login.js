import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends React.Component {
  constructor(){
    super()
   }
   login = () => {
  this._storeData()
  this.props.navigation.navigate('AuthLoading')
  }
   _storeData = async () => {
    try {
      await AsyncStorage.setItem('userToken', 'chara');
    } catch (error) {
      console.warn("error")
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo} 
            source={require('./writing.png')} 
            />
          <Text style={styles.bigwhite}> Notes </Text> 

        </View>
        <View style = {styles.formContainer}>
        <LoginForm login = {this.login.bind(this)}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logoContainer: {

    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center' 
  },
  logo:{
    width: 100,
    height: 100
  },
  bigwhite: {
    color: '#66C2FF',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
