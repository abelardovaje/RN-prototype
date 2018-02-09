import { StackNavigator } from 'react-navigation';
import Group from './components/group';
export const GroupStacks = StackNavigator({
    Groups:{
        screen:Group,
        navigationOptions:{
            title:'Groups'
        }
    }
});