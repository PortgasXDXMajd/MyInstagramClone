import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './components/auth/Landing.js';
import RegisterPage from './components/auth/Register';
import LoginPage from './components/auth/Login';
import Welcome from './components/Welcome.js';
import Main from './components/home/Main.js';

import {auth} from './components/Firebase';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk));


const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false,
      loggedIn: false,
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loaded: true,
          loggedIn:false
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render(){
    const {loaded, loggedIn} = this.state;

    if(!loaded){
      
      return <Welcome />

    }else if(!loggedIn){
      
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Landing' component={LandingPage} options={{ headerShown: false }}/>
            <Stack.Screen name='Register' component={RegisterPage} options={{ headerShown: true }}/>
            <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: true }}/>
          </Stack.Navigator>
        </NavigationContainer>
      
      );
    }

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )

  }
}
