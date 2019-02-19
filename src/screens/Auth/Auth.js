import React, { Component } from 'react';
import { View, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import backgroundImage from '../../assets/vancouver.jpg';

import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    };

    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
        });
    }

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        let headingText = null;

        if (this.state.viewMode === 'portrait') {
            headingText = (
                <MainText>
                    <HeadingText style={{ color: "#bbb" }}>Please Log In</HeadingText>
                </MainText>
            );
        }

        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={backgroundImage}>
                <View style={styles.container}>
                    {headingText}
                    <ButtonWithBackground
                        color="#29aaf4"
                        onPress={() => alert("Login")}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput placeholder="Your E-mail Address" style={styles.input} />
                        <View style={
                            this.state.viewMode === 'portrait' 
                            ? styles.portraitPasswordContainer
                            : styles.landscapePasswordContainer
                        }>
                            <View style={
                                this.state.viewMode === 'portrait'
                                ? styles.portraitPasswordWrapper
                                : styles.landscapePasswordWrapper
                            }>
                                <DefaultInput placeholder="Password" style={styles.input} />
                            </View>
                            <View style={
                                this.state.viewMode === 'portrait'
                                ? styles.portraitPasswordWrapper
                                : styles.landscapePasswordWrapper
                            }>
                                <DefaultInput placeholder="Confirm Password" style={styles.input} />
                            </View>
                        </View>
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
    },
    landscapePasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    portraitPasswordContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    landscapePasswordWrapper: {
        width: '45%'
    },
    portraitPasswordWrapper: {
        width: '100%'
    }
});

export default AuthScreen;