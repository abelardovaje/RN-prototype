import React, {Component} from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import {View,Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';

class Contact extends Component{
    static navigationOptions = {
        headerTitle:'Instagram',
        headerRight:(
            <Icon name='ios-send-outline'
            size={30}
            type='ionicon' iconStyle={
                {color:'white',marginRight:10}
            } />
        ),
        headerLeft:(
            <Icon name='ios-camera-outline'
            size={30}
            type='ionicon' iconStyle={
                {color:'white',marginLeft:10}
            } />
        )
    }
    constructor(){
        super();
        this.state = {
            users:[
                {
                    id:1,
                    name:'user1',
                    email:'user1@gmail.com'
                },
                {
                    id:2,
                    name:'user2',
                    email:'user2@gmail.com'
                },
            ]
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
           
            <ScrollView style={styles.container}>
                 {/* <FlatList
                        style={styles.list}
                        data={this.state.users}
                        keyExtractor={(item,index)=>item.id}
                        renderItem={({item})=>
                             <ListItem 
                             onPress={()=>navigate('UserDetails',item)}
                             subtitle={item.email}title={item.name}
                             style={styles.listItem}/>
                        }
                    />        */}
                                          
            </ScrollView>
           
        );
    }
}

let styles= StyleSheet.create({
    container:{
        backgroundColor:'#202225'
    },
    list:{
        backgroundColor:'#202225',
    },
    listItem:{
        color:'red'
    },
    red:{
        color:'green'
    }   
})


export default Contact;