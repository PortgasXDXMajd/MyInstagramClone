import React, { Component } from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {auth} from '../Firebase.js'

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
        this.onLogin = this.onLogin.bind(this);

    }

    onLogin(){
        const {email, password} = this.state;

        auth.signInWithEmailAndPassword(email,password)
        .then((res)=>{
            console.log(res)
            console.log(res.user.uid)
        }).catch((error)=>{alert(error)});

    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.textField}
                    placeholder='Email'
                    name={this.state.email}
                    onChangeText={(e)=> this.setState({
                        email : e
                    })}/>
                    
                <TextInput
                    style={styles.textField}
                    placeholder='Password'
                    name = {this.state.password}
                    secureTextEntry={true}
                    onChangeText={(pass)=> this.setState({
                        password : pass
                    })}/>

                <Button
                    onPress={()=>this.onLogin()}
                    title='Login'/>
                
            </View>
        )
    }
}


const styles  = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        marginHorizontal: 10,
    },
    textField:{
        height: 30,
        

    }
});