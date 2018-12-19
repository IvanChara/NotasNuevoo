import React, {Component} from 'react';
import {
    View, Button, AsyncStorage,
    Text, KeyboardAvoidingView, TouchableOpacity,
    StyleSheet, TextInput, ScrollView, SafeAreaView, Image
} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createBottomTabNavigator,
  DrawerItems} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
//import createSwitchNavigator from '../App'

class Nota extends Component {
  
  
    render() {
      console.warn(this.props.navigation)  
        return (
          <View style = {styles.container}> 
            <View>
              <TextInput style={{fontSize:20}}
              editable = {true}
              multiline = {true}
              placeholder = "This note is empty, start editing this"
              placeholderTextColor={'black'}
              enablesReturnKeyAutomatically={true}
             /> 
               
              
            </View>
            
          </View>
              
        );
        
    }
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#51E4FE',
    flex: 1,
   // alignItems: 'center',
  //  justifyContent: 'center',
  }, 
  button: {
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderBottomColor: '#51E4FE',
    borderWidth: 7,
    paddingVertical: 10,
    flex: 1
  }
});

/* _storeData = async () => {
  try {
    await AsyncStorage.setItem('userToken', 'chara');
  } catch (error) {
    console.warn("error")
  }
} */ 
const AppStackNavigator = createStackNavigator({
  Nota:{
    screen: Nota,
    navigationOptions: ({navigation}) => ({
      
      headerRight:(
        <View>
          <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <View style={{paddingHorizontal:10}}> 
              <Icon name= "plus" size= {24} />
            </View>
          </TouchableOpacity> 
        </View> 
      ),
    
      headerLeft:(
        <View style={{flex: 1, flexDirection: 'row'}}> 
          <View>
            
            <TouchableOpacity  onPress={()=>{
            // this._storeData()  

              navigation.navigate('App')
            }}>   
              <View style={{paddingHorizontal:10}}> 
                <Icon name= "arrow-left" size= {24} />
              </View>   
            </TouchableOpacity>
          </View>
          <View style = {{paddingLeft:10}}>
            <TextInput style={{fontSize:20, fontWeight:'bold'/*, maxWidth:250*/}} 
                editable = {true}
                placeholder = "Note"
                placeholderTextColor={'black'} 
                maxLength = {15}  
               /* onChangeText={
                  
                }*/
            />  
          </View>
        </View>
      )
    })      
  }
})   

const CustomDrawerComponent = (props) => (

  <SafeAreaView style = {{flex: 1,marginTop: 20}}>   
    <ScrollView>  
      <DrawerItems {...props}/>
      <TouchableOpacity style = {styles.button}> 
        <Text> Image </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button}> 
        <Text> Audio </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button}> 
        <Text> Table </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button}> 
        <Text> Draw </Text>
      </TouchableOpacity>      
    </ScrollView> 
  </SafeAreaView> 
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
},{
  drawerPosition: 'right',
contentComponent: CustomDrawerComponent
}) 
  export default createSwitchNavigator({
    Drawer: AppDrawerNavigator
  }) 
  
 