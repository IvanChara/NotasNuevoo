import React, {Component} from 'react';
import {
    View,
    Text, KeyboardAvoidingView,
    StyleSheet, AppRegistry, TextInput, ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class Nota extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: 'Useless Multiline Placeholder',
      };
    }
    render() {
        return (
            <View>
            
                <TextInput style={{fontSize:20}}
                {...this.props} 
                editable = {true}
                multiline = {true}
                placeholder = "This note is empty, start editing this"
                placeholderTextColor={'black'}
                enablesReturnKeyAutomatically={true}
                />  
             
         </View > 
        );
      }  
    }
    
  
  


/*const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#3498db',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  */
