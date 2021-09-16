import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import RoundedBox from './roundedBox';

export default class TextBox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.height)
        return(
            <RoundedBox {...this.props}>
                <Text  style = {[styles.text, {fontSize:this.props.fontSize?this.props.fontSize:"150%", color:this.props.color?this.props.color : "#909090"}]}>{this.props.text}</Text>
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