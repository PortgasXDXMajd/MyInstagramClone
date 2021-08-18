import React, { Component } from 'react';
import { ViewBase, Text, View, StyleSheet, Button } from 'react-native';
import {auth} from '../Firebase';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../redux/actions/index.js';

import {MainStyles} from '../../styles/MainStyles'


export class Main extends Component {


    constructor({navigation}){
        super({navigation})
    }

    
    componentDidMount(){
        fetchUser();

    }

    render() {
        const {currentUser} = this.props;

        return (
            <View style={MainStyles.container}>
                <Text style={MainStyles.text}>Home</Text>
                <Text style={MainStyles.text}>{currentUser != null? currentUser.email:`hh`}</Text>
                <Button title='Logout'  onPress={()=>this.logout()}/>
            </View>
        )
    };
    
};

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators(fetchUser,dispatch);


export default connect(mapStateToProps, mapDispatchProps)(Main);