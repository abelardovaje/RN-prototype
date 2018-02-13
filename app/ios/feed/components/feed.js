import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Avatar} from 'react-native-elements';
import Following from './following';
import Story from './story';
class Feed extends Component {
    render(){
        return (
         <ScrollView style={styles.container}>

            <Following/>
            <Story/>
         </ScrollView>   
          
           
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#202225'
    }
});
export default Feed;