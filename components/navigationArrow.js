import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Easing } from 'react-native';
import { Icon } from 'react-native-elements'

export default class NavigationArrow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rotateValue: new Animated.Value(0),
      left: true,
      sizeValue: new Animated.Value(0)
    }
    this.handlePress = this.handlePress.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
  }

  componentDidMount() {

    Animated.timing(
      this.state.sizeValue,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.back(),
      }
    ).start();

    this.setState({
      size: this.state.sizeValue.interpolate({inputRange: [0,1], outputRange: ["0px","53px"]})
    });
  }
  componentWillUnmount() {
    Animated.timing(
      this.state.sizeValue,
      {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.back(),
      }
    ).start();
    this.setState({
      size: this.state.sizeValue.interpolate({inputRange: [0,1], outputRange: ["0px","53px"]})
    });
  }

  rotateLeft() {
    Animated.timing(
      this.state.rotateValue,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.back(),
      }
    ).start();
    this.setState({left: false})
  }

  rotateRight() {
    Animated.timing(
      this.state.rotateValue,
      {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.back(),
      }
    ).start();
    this.setState({left: true})
  }
  handlePress () {
    
    this.state.left ? this.rotateLeft() : this.rotateRight();

    this.setState({
      rotation: this.state.rotateValue.interpolate({inputRange: [0,1], outputRange: ["0deg","-180deg"]}),
    });


    this.props.onPress()
  }


  render () {
    return(
      <Animated.View style = {[styles.navigationArrow, {transform: [{rotate: this.state.rotation}], width: this.state.size, height: this.state.size}]} onPress = {this.props.onPress} >
        <Icon style = {styles.navigationArrowIcon} onPress = {this.handlePress} color = "#909090" name= "arrow-right" type="font-awesome-5"></Icon>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  navigationArrow: {
    color: "#fff",
    width: "53px",
    height: "53px",
    borderRadius: "53px",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#EFEFEF",
    transform: [{rotate: "100deg"}],
    overflow: 'hidden'

  },
  navigationArrowIcon: {

  }
});