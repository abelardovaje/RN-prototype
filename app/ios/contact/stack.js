import { StackNavigator } from 'react-navigation';
import Contact from './components/contact';
import React from 'react';
import UserDetails from './components/user-details';
import { Icon } from 'react-native-elements';
export const ContactStacks = StackNavigator({
    Contacts:{
        screen:Contact,
        navigationOptions:{
            headerTitle:'Instagram',
            headerBackTitle:'back',
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
    },
    UserDetails:{
        screen:UserDetails,
        navigationOptions:({ navigation}) =>{
            const { params } = navigation.state;
            return {
                title:params.name.first
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