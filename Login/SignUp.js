import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import SignUpForm from './SignUpForm';


export default class SignUp extends React.Component {
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
        <SignUpForm />
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
