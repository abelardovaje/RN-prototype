import React from 'react';
import {StackNavigator} from 'react-navigation';
import Feed from './components/feed';
import {Icon} from 'react-native-elements';
export const FeedStacks = StackNavigator({
    Feeds:{
        screen:Feed,
        navigationOptions:{
            headerTitle:'Instagram',
            headerRight:(
                <Icon
                    name="ios-send-outline"
                    type="ionicon"
                    size={30}
                    iconStyle={{color:'white',marginRight:10}}
                />
            ),
            headerLeft:(
                <Icon
                    name="ios-camera-outline"
                    type="ionicon"
                    size={30}
                    iconStyle={{color:'white',marginLeft:10}}
                />
            )

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
