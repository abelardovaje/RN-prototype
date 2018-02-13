import React, {Component} from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import {View,Text, FlatList, ScrollView, StyleSheet} from 'react-native';
import { List, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
import axios from 'axios';
class Contact extends Component{

    constructor(){
        super();
        this.state = {
            users:[]
                 
        }
    }

    componentDidMount(){
       
        let _self = this;
        axios.get('https://randomuser.me/api/?results=20').then((res)=>{
            console.log('hello');
            _self.setState({
               users:res.data.results
           });
        });
    }

    renderListHeader(){
        return (
            <SearchBar placeholder="Type here..." darkTheme round/>
        );
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
           
            <ScrollView style={styles.container}>
                 <FlatList
                        style={styles.list}
                        data={this.state.users}
                        keyExtractor={(item,index)=>item.email}
                        ListHeaderComponent={this.renderListHeader}
                        renderItem={({item})=>
                             <ListItem 
                             underlayColor='#37393e'
                             roundAvatar
                             containerStyle={{borderBottomWidth:0}}
                             onPress={()=>navigate('UserDetails',item)}
                             avatar={item.picture.large}
                             subtitle={item.email}
                             title={`${item.name.first + " " + item.name.last}`}
                             style={styles.listItem}/>
                        }
                    />                                              
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