import React from 'react';
import {Text, View ,StyleSheet, Button} from 'react-native';
class UserDetails extends React.Component{
    render(){
    
        return (
            <View style={styles.container}>
              <Button title="Update title" onPress={()=>{
                  this.props.navigation.setParams({name:'hello'})
              }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202225',
        flexDirection:'column'
    },
    boxContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    box1:{
        flex:3,
        backgroundColor:'red'
    },
    box2:{
        backgroundColor:'green'
    },
    box3:{
        flex:2,
        flexDirection:'row',
        alignItems:'flex-end',
        backgroundColor:'blue'
    }

})



export default UserDetails;