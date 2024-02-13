import React, { Component, } from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

import { initializeApp, } from 'firebase/app';
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';


class App extends Component {
    state = { loggedIn: null }

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

        const auth = getAuth();

        auth.onAuthStateChanged((user) => {
            console.log('user is ', user)
            if (user) {
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false })

            }

        })

    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => {
                            const auth = getAuth();

                            signOut(auth)
                        }}>Logout</Button>
                    </CardSection>
                )
            case false:
                return <LoginForm />

            default:
                return <Spinner />
        }
    }




    render() {
        return (
            <View >
                <Header headerText="Authentication" />
                {this.renderContent()}

            </View>
        )
    }
}

export default App;