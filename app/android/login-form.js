import React , {Component} from 'react';
import { StyleSheet, Text, View ,TextInput ,KeyboardAvoidingView ,TouchableOpacity } from 'react-native';
import {
    StackNavigator
  } from 'react-navigation';
export default class LoginForm extends Component{

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
       this.props.login();
    }

    render(){
        return(
           
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='username'
                    placeHolderTextColor='white'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onSubmitEditing={()=>this.passwordInput.focus()}
                    style={styles.input}                
                />

                <TextInput
                    underlineColorAndroid='transparent'
                    secureTextEntry
                    placeholder='password'
                    placeHolderTextColor='white'
                    returnKeyType='go'
                    style={styles.input}
                    ref={(input)=>this.passwordInput = input}                
                />         

                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}> 
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View>
           </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        marginBottom:50,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    input:{     
        height:40,
        width:300,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        paddingHorizontal:10,
        color:'white',
        borderRadius:25

        // padding:'5px'
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:10,
        marginBottom:10,
        borderRadius:25
    },
    buttonText:{
        textAlign:'center',
        color:'white',
    }
})