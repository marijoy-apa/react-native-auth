import React, { Component, } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

import { initializeApp } from 'firebase/app';


class App extends Component {
    UNSAFE_componentWillMount() {
        console.log('hello word')
        initializeApp({
            apiKey: "AIzaSyD4jmwJLsKjMNRGFCDRQ6A3FrvVjcUhBFI",
            authDomain: "react-auth-630f0.firebaseapp.com",
            projectId: "react-auth-630f0",
            storageBucket: "react-auth-630f0.appspot.com",
            messagingSenderId: "550735091827",
            appId: "1:550735091827:web:7aea9413c884b7bb647206"

        })

    }




    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App;