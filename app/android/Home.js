import React , {Component} from 'react';
import { StyleSheet, Text, View ,Image,StatusBar,DrawerLayoutAndroid ,ToolbarAndroid} from 'react-native';
export default class Home extends Component{
    static navigationOptions = ({ navigation }) => ({
        header:false,
    });
    render(){
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return(
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={styles.container}>
                    <Text>Home</Text>
                </View>
               
            </DrawerLayoutAndroid>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})