import React , {Component} from 'react';
import { StyleSheet, Text, View ,Image,StatusBar} from 'react-native';
import LoginForm from './login-form';
export default class Login extends Component{
    static navigationOptions = ({ navigation }) => ({
        header:false,
    });

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(){
        this.props.navigation.navigate('Home');
    }
    render(){
        
        return(
           <View style={styles.container}>
           <StatusBar  barStyle='light-content'/>                      
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../images/Octocat.png')}/>
                        <Text style={styles.title}>GitHub Login</Text>
                </View>
                
                <LoginForm login={this.handleLogin}/>
                
                
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,     
        backgroundColor:'#3498db'
    },
    logoContainer:{
        // borderColor:'red',
        // borderWidth:1,
        // flexGrow:1
        marginTop:50,
        flex:1,   
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:100,
        height:100
    },
    title:{
        color:'white',
        textAlign:'center'
    }

})