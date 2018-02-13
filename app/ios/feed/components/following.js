import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Avatar, Button } from 'react-native-elements';
class Following extends Component {

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.followingContainer}>
                    <Text style={styles.label}>Stories</Text>
                    <View style={styles.listContainer}>
                        <ScrollView horizontal={true}>
                            <View style={styles.items}>
                                <Avatar
                                    medium
                                    rounded
                                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                                    activeOpacity={0.7}
                                    containerStyle={{marginTop:5}}
                                />
                                <Text 
                                numberOfLines={1}
                                style={styles.itemsLabel}>You</Text>
                            </View>

                            <View style={styles.items}>
                                <Avatar
                                    medium
                                    rounded
                                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                                    activeOpacity={0.7}
                                    containerStyle={{marginTop:5}}
                                />
                                <Text 
                                numberOfLines={1}
                                style={styles.itemsLabel}>looooooong name</Text>
                            </View>            
                        </ScrollView>    
                    </View>
                </View>               
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#202225'
    },
    followingContainer:{
        backgroundColor:'#2B313B',
        height:130,
        flexDirection:'column'
    },
    label:{
        // borderColor:'red',
        color:'white',
        // borderWidth:1,
        padding:10,
        paddingLeft:10,
    },
    listContainer:{
        flex:1,
        flexDirection:'row',
        // justifyContent:'flex-start',
        // alignItems:'flex-start',
        // borderColor:'red',
        // borderWidth:1,
        // padding:2
    },
    items:{
        width:80,
        // borderWidth:1,
        // borderColor:'green',
        alignItems:'center',
        padding:7
    },
    itemsLabel:{
        // marginTop:5,
        color:'white',
        fontSize:10
    }


});
export default Following;