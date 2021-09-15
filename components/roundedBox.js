import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Easing, TextInput } from 'react-native';

export default class RoundedBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            widthValue: new Animated.Value(0),
            width: "",            
        }
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount () {
        Animated.timing(
            this.state.widthValue,
            {
              toValue: 1,
              duration: 500,
              useNativeDriver: false,
              easing: Easing.back(),
            }
          ).start();
          this.setState({width: this.state.widthValue.interpolate({inputRange: [0,1], outputRange: ["0%", this.props.width || "90%"]})});
    }

    componentWillUnmount () {
        Animated.timing(
            this.state.widthValue,
            {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
              easing: Easing.back(),
            }
          ).start();
          this.setState({width:this.state.widthValue.interpolate({inputRange: [0,1], outputRange: ["0%", this.props.width || "90%"]})});
    }

    handlePress() {
        this.props.onPress();
    }

    render() {
        return(
            <Animated.View onPress={this.handlePress} onRelease style = {[styles.box, {width: this.props.overrideWidth ? this.props.overrideWidth : this.state.width, overflow: this.props.overflow? this.props.overflow : "hiddne", paddingRight: this.props.paddingRight, justifyContent: this.props.justifyContent?this.props.justifyContent : "center", padding:this.props.padding, height:this.props.height?this.props.height : "53px", margin:this.props.margin, borderRasius: this.props.borderRadius?this.props.borderRadius : "25px", backgroundColor: this.props.backgroundColor? this.props.backgroundColor : "#EFEFEF"}]}>
                {this.props.children}
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        borderRadius: "25px",
        height: "53px",
        backgroundColor: "#EFEFEF",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        flexDirection: 'row',
        overflowLeft: "scroll"
    }
})