import React , {Component} from 'react';
import { StyleSheet, Text, View ,Image,StatusBar,DrawerLayoutAndroid ,ToolbarAndroid} from 'react-native';
import {Tabs} from '../../config/router';
export default class Home extends Component{
    static navigationOptions = ({ navigation }) => ({
        header:false,
    });
    render(){
       
        return(
           <Tabs/>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})