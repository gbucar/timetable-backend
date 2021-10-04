import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationArrow from './components/navigationArrow';
import InputBox from './components/inputBox';
import SwitchBox from './components/switchBox';
import TimetablePage from './components/timetablePage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      logged: false,
      name: "",
      secondName: "",
      online: true
    };

    this.handleNavigationArrowPress = this.handleNavigationArrowPress.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  async getClasses(name, secondName) {
    let classNames =  []
    await fetch(this.formateApiLink("/class", name, secondName))
      .then(a => a.json())
      .then(a => classNames=a)
    return classNames
  }

  async componentDidMount() {
    let credentials = JSON.parse(await AsyncStorage.getItem("credentials"))
    let [name, secondName] = credentials || ["", ""]
    this.setState({
      name: name,
      secondName: secondName
    })
  }
  
  async saveCredentials(credentials) {
    let credentialsString = JSON.stringify(credentials);
    await AsyncStorage.setItem("credentials", credentialsString);
  }

  async handleNavigationArrowPress () {
    if (this.state.logged) {
      this.setState({
        logged: false,
        online: true
      });
      return true
    }
    else {
      let name = this.state.name.trim().toLowerCase();
      let secondName = this.state.secondName.trim().toLowerCase();
      let cls = await this.getClasses(name, secondName);
      if (cls.length >1) alert("Izgleda, da se tvoje ime pojavi v več oddelkih (" + cls.join(", ") + "). Prikazan bo urnik " + cls[0] + ". Opravičujem se za to napako in delam na tem, da jo odpravim. Do takrat lahko uporabljaš ime kakšnega sošolca 🙂😕")
      if (!name || !secondName || !cls[0]) return;
      if (cls[0]) {
        this.saveCredentials([name, secondName]);
        this.setState({logged:true, loading:true});
        this.setState({
          loading: false,
          cls:cls
        });
      }
      return true
    }
  }

  handlePress() {
    this.setState({
      online: !this.state.online
    });
  }

  formateApiLink(path, firstName, secondName, online, className) {
    return "https://timetable-gz.herokuapp.com" + path + "?first_name=" + firstName + "&second_name=" + secondName + "&online=" + (online ? "1" : "0") + "&class_name=" + className
  }


  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar hidden = {true} />
          {
            !this.state.logged ?            
            <View style={[styles.inputFormContainer, {visibility: this.state.logged ? "hidden" : ""}]}>
              <InputBox value={this.state.name} onChangeText={a => this.setState({name: a})} placeholder="IME"></InputBox>
              <InputBox value={this.state.secondName} onChangeText={a => this.setState({secondName: a})} placeholder="PRIIMEK"></InputBox>
              <SwitchBox onPress={this.handlePress} textOne="ONLINE URNIK" textTwo="OSNOVEN URNIK"></SwitchBox>
            </View>  
            :
            this.state.loading? [] :
            <TimetablePage 
              user = {[this.state.name, this.state.secondName, this.state.cls]}
              online = {this.state.online}
              className = {this.state.className}
              formateApiLink = {this.formateApiLink} ></TimetablePage>
          }
            <NavigationArrow
              loading = {this.state.loading}onPress = {this.handleNavigationArrowPress} />

        </View>
      </SafeAreaProvider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputFormContainer: {
    width: "100%",
    height: "40%",
    alignItems: 'center',
    justifyContent: 'space-around',

  }
});
