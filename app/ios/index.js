import { StackNavigator } from 'react-navigation';
import Login from './login/login';
import Home from './home/home';
export const RootStack = StackNavigator({
    Login: { 
      screen: Login
    },
    Home:{
      screen:Home
    } 
});