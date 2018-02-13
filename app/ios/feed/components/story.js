import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

class Story extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.cards}>
                    <View style={styles.header}>
                        <Text>Text</Text>
                    </View>
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cards:{
        flex:1,
        backgroundColor:'white',
        padding:3
    },
    header:{
        borderWidth:1,
        borderColor:'red',
        padding:10
    }
});

export default Story;