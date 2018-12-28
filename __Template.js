import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Template extends React.Component {
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