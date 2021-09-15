import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import RoundedBox from './roundedBox';
import { Animated } from 'react-native';

export default class SwitchBox extends Component {
    constructor(props) {
        super(props)
        this.state={
            text: this.props.textOne,
            opacityValue: new Animated.Value(0),
            opacity: 1
        }
        this.switchText = this.switchText.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }


    componentDidMount() {
        this.fadeText()
    }

    fadeText() {
        Animated.sequence([
            Animated.timing(
            this.state.opacityValue,
                {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
                }
            ),
            Animated.timing(
                this.state.opacityValue,
                {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
                }
            )
        
        ]).start();
            this.setState({
                opacity: this.state.opacityValue.interpolate({inputRange: [0,1], outputRange: [0,1]}),
            });
    }

    switchText() {
        let text = this.props.textOne == this.state.text ? this.props.textTwo : this.props.textOne;
        this.setState({
            text: text
        });
    }

    handlePress() {
        this.fadeText();
        new Promise(() => setTimeout(this.switchText, 500));
        this.props.onPress();
    }

    render() {
        console.log(this.state.opacity)
        return(
            <RoundedBox >
                <Animated.Text style={[styles.text, {opacity: this.state.opacity}]} onPress={this.handlePress}>{this.state.text}</Animated.Text>
            </RoundedBox>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "#909090",
        fontSize: "150%"
    }
})