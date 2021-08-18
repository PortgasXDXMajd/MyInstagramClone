import React, { Component } from 'react';
import FeedScreen from './main/Feed'
import AddScreen from './main/Add'
import ProfileScreen from './main/Profile'


import { Text, View, Button } from 'react-native';
import {auth} from '../helpers/Firebase';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index.js';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


const EmptyScreen = ()=>{
    return null;
}

const Tab = createMaterialBottomTabNavigator();

export class Root extends Component {
    
    componentDidMount(){
        fetchUser();
    }

    render() {
        return (
            <Tab.Navigator initialRouteName='Feed' labeled={false}>
                <Tab.Screen 
                    name="Feed"
                    component={FeedScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size})=>(
                            <Icons name='home' color={color} size={26}/>
                        ),
                        
                    }} 
                />

                <Tab.Screen 
                    name="Container"
                    component={EmptyScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size})=>(
                            <Icons name='plus-box' color={color} size={26}/>
                        ),
                        tabBarLabel: 'Addd'
                    }}
                    listeners = {({navigation}) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate('Add')
                        }
                    })}
                />


                <Tab.Screen 
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size})=>(
                            <Icons name='account-circle' color={color} size={26}/>
                        ),
                        
                    }} 
                />
                    
            </Tab.Navigator>
        )
    };
    
};

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators(fetchUser,dispatch);


export default connect(mapStateToProps, mapDispatchProps)(Root);