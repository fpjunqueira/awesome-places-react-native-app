import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/vancouver.jpg';

import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Please Log In</HeadingText>
                    </MainText>
                    <ButtonWithBackground 
                        color="#29aaf4"
                        onPress={() => alert("Login")}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your E-mail Address" style={styles.input} />
                        <DefaultInput placeholder="Password" style={styles.input} />
                        <DefaultInput placeholder="Confirm Password" style={styles.input} />
                    </View>
                    <ButtonWithBackground 
                        color="#29aaf4"
                        onPress={this.loginHandler}>Submit</ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }
});

export default AuthScreen;