import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import RoundedBox from './roundedBox';

export default class TextBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <RoundedBox {...this.props}>
                <Text  style = {[styles.text, {fontSize:this.props.fontSize?this.props.fontSize:"150%"}]}>{this.props.text}</Text>
            </RoundedBox>
        );
    }
}

const styles = new StyleSheet.create({
    text: {
        color: "#909090",
        borderColor: "#909090",
        textAlign: "center",
        fontSize: "150%",
        textTransform: 'capitalize',
        marginVertical: "auto",
        padding: 3
    }
});