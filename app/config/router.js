import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {View,Text} from 'react-native';
import { ContactStacks } from '../ios/contact/stack';
import { GroupStacks } from '../ios/group/stack';
export const Tabs = TabNavigator({
    Contacts:{
        screen:ContactStacks,
        navigationOptions:{
            tabBarLabel:'Contacts',
            tabBarIcon:({tintColor})=><Icon name="ios-contacts-outline" size={30}  color={tintColor} />
                
        }
    },
    Groups:{
        screen:GroupStacks,
        navigationOptions:{
            tabBarLabel:'Groups',
            tabBarIcon:({tintColor})=><Icon name="ios-people-outline" size={30} color={tintColor}/>
                
        }
    }
});

