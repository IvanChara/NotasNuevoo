import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Nota from './Nota'
export default class ListaNota extends React.Component {
  render() {
    return (
        
      <View style={styles.container}>
        <Text>hola</Text>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 40
  }
});
