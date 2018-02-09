import { StackNavigator } from 'react-navigation';
import Contact from './components/contact';
import React from 'react';
import UserDetails from './components/user-details';

export const ContactStacks = StackNavigator({
    Contacts:{
        screen:Contact
    },
    UserDetails:{
        screen:UserDetails,
        navigationOptions:({ navigation}) =>{
            const { params } = navigation.state;
            return {
                title:params.name
            }
        }
            
        
    }
    
},{
    navigationOptions:{
        headerStyle:{
          backgroundColor:'#202225'
        },
        headerTintColor:'white'
      }
});