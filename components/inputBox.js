import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import RoundedBox from './roundedBox';

export default class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state={
            borderColor:"#909090"
        }
        this.onFocus=this.onFocus.bind(this)
    }
    
    onFocus() {
        this.setState({borderColor: "#909090"})
    }

    render() {
        return(
            <RoundedBox>
                <TextInput value={this.props.value} onChangeText = {this.props.onChangeText} onFocus={this.onFocus} {...this.props} style = {[styles.text, {borderColor: this.state.borderColor}]}></TextInput>
            </RoundedBox>
        );
    }
}

const styles = new StyleSheet.create({
    text: {
        color: "#909090",
        borderColor: "#909090",
        height: "53px",
        width: "110vw",
        borderRadius: "53px",
        textAlign: "center",
        fontSize: "150%",
        textTransform: 'capitalize'
    }
});