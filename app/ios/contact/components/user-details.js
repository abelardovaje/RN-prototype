import React from 'react';
import {Text, View ,StyleSheet, Button} from 'react-native';
class UserDetails extends React.Component{
    render(){
    
        return (
            <View style={styles.container}>

                    <View style={styles.profile}>
                        <View style={{flex:2,borderColor:'white',borderWidth:1,height:'100%'}}></View>
                        <View style={{flex:5,borderColor:'white',borderWidth:1,height:'100%'}}></View>
                    </View>

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
    profile:{
        height:100,
        borderBottomWidth:1,
        borderColor:'whitesmoke',
        padding:3,
        flexDirection:'row'
        // backgroundColor:'red'
    },

})



export default UserDetails;