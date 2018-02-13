import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {View,Text} from 'react-native';
import { ContactStacks } from '../ios/contact/stack';
import { GroupStacks } from '../ios/group/stack';
import {FeedStacks} from '../ios/feed/stack';
export const Tabs = TabNavigator({
    Feeds:{
        screen:FeedStacks,
        navigationOptions:{
            tabBarLabel:'Contacts',
            tabBarIcon:({tintColor})=><Icon name="ios-home-outline" size={30}  color={tintColor} />,
            // swipeEnabled:true
                
        }
    },
    Groups:{
        screen:GroupStacks,
        navigationOptions:{
            tabBarLabel:'Groups',
            tabBarIcon:({tintColor})=><Icon name="ios-people-outline" size={30} color={tintColor}/>, 
            // swipeEnabled:true            
        }
    }
},{
    tabBarOptions:{
        activeTintColor: 'white',
        style:{ backgroundColor: '#2B313B'},
        showLabel:false
    },
    // animationEnabled:true,
    // swipeEnable:true
});

