import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationArrow from './components/navigationArrow';
import InputBox from './components/inputBox';
import SwitchBox from './components/switchBox';
import TimetablePage from './components/timetablePage';
import classes from './assets/json/classes.json'
import matura_timetable from './assets/json/matura_timetable.json'
import timetable_a from './assets/json/timetable_a.json'
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

  getClass(name, secondName) {
    for (let cls in classes) {
      if (classes[cls].includes((name.split(" ")[1]?(name.split(" ")[0]+" "+ name.split(" ")[1][0]+ ". " ) : name+" " )+ secondName)) {
        return cls
      }
    }
  }

  async componentDidMount() {
    let [name, secondName] = JSON.parse(await AsyncStorage.getItem("credentials"))
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
        logged: false
      });
      return true
    }
    else {
      let name = this.state.name.trim().toLowerCase();
      let secondName = this.state.secondName.trim().toLowerCase();
      let online = this.state.online;
      let cls = this.getClass(name, secondName);
      if (!name || !secondName || !cls) return
      if (cls) {
        this.saveCredentials([name, secondName]);
        this.setState({logged:true, loading:true});
        let timetable = timetable_a
        if (online) {
          await fetch("https://timetable-gz.herokuapp.com/").then(a => a.json()).then(a => {timetable = a}).catch(a => console.warn(a));
        }
        this.setState({
          timetable: timetable[cls],
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
            this.state.loading?"":<TimetablePage maturaTimetable={matura_timetable[this.state.name.trim().toLowerCase() + " " + this.state.secondName.trim().toLowerCase()]} user = {[this.state.name, this.state.secondName, this.state.cls]} timetable = {this.state.timetable}></TimetablePage>
          }
            <NavigationArrow loading = {this.state.loading}onPress = {this.handleNavigationArrowPress} />
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
