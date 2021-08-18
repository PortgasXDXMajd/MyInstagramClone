import React, { Component } from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {auth, db} from '../../helpers/Firebase'

export default class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            fullName:'',
        }
        this.onSignUp = this.onSignUp.bind(this);

    }

    onSignUp(){
        const {email, fullName, password} = this.state;

        auth.createUserWithEmailAndPassword(email,password)
        .then((res)=>{
           const newUser = res?.user;
           db.collection('users')
            .doc(newUser?.uid)
            .set({
                fullName: fullName,
                email: newUser.email,
            });

        }).catch((error)=>{alert(error)});

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textField}
                    placeholder = 'Full Name'
                    name = {this.state.fullName}
                    onChangeText = {(n)=> this.setState({
                        fullName: n
                    })}/>

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
                    onPress={()=>this.onSignUp()}
                    title='Sign Up'/>
                
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