import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Linking, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RoundedBox from './roundedBox';
import TextBox from './textBox';

export default class TimetablePage extends Component {
    constructor(props) {
        super(props)
        this.openTimetable = this.openTimetable.bind(this);
        this.state={
            timetable: [],
            fullName: "NAPAKA :/"
        }
        this.getColor = this.getColor.bind(this);
    }


    
    formateTimetableLink() {
        let d = new Date()
        d = d.getMonth() + 1
        d = String(d)
        if (d.length == 1) d = "0" + d
        return "https://gz.zelimlje.si/wp-content/uploads/sites/2/2021/" + d +"/Urnik_teden.pdf"
    }
    


    async componentDidMount() {
        let firstName = this.props.user[0];
        let secondName = this.props.user[1];
        let online = this.props.online;
        let className = this.props.className;
        let path = "/personalized";
        await fetch(this.props.formateApiLink(path,firstName, secondName, online, className))
            .then(a => a.json())
            .then((a)=> {
                this.setState({
                    timetable: a.timetable,
                    gender: a.gender,
                    fullName: a.fullName
                });
            });
    }

    openTimetable() {Linking.openURL('https://docs.google.com/gview?url=' + this.formateTimetableLink())}

    getColor(i) {
        let colors = {
            "m": ["#008CAB", "#ffffff"],
            "f": ["#FFA7A7", "#ffffff"],
            "r": ["#E2FF90"]
        }
        
        return this.state.gender ? colors[this.state.gender][i] : "";
    }

    render() {
        let days = ["P", "T", "S", "Č", "P"];
        let image_source = this.state.gender == "r"? require("../assets/link_gray.png") : require("../assets/link.png");
        return(
            <View style={[styles.container, this.state.timetable.length ? {} : {display: 'none'}]}>
                <TextBox 
                    backgroundColor = {this.getColor(0)} 
                    color={this.getColor(1)} 
                    text = {this.state.fullName}
                    style = {styles.title}>
                        <TouchableOpacity 
                            onPress={this.openTimetable}>
                                <Image 
                                    style={styles.imageLink}
                                    source={image_source}>    
                                </Image>
                        </TouchableOpacity>
                </TextBox>
                <View style= {styles.timetableContainer}>
                    {
                        this.state.timetable.map((a, i) => {
                            let today = new Date().getDay()-1;
                            
                            return (
                            <RoundedBox justifyContent="center" width="95%" key = {i} style = {[styles.dayContainer]}><Text style={[styles.text, {fontWeight: today == i ? "bold" : ""}]}>{days[i]}</Text>
                                <RoundedBox padding = "5px" borderRadius="5px" overflow="scroll" backgroundColor={today == i ? "#cbcbcb" : "#EFEFEF"} justifyContent={"left"} maxWidth="95%" minWidth="90%">
                                        {
                                            a.map(a => {
                                                a = !a || a == "---"? ";)" : a;
                                                return(<TextBox backgroundColor={i >=today || today < 6 ? this.getColor(0) : "#cbcbcb"} margin="3px" overrideWidth="auto" padding={5} fontSize={"100%"} key = {Math.random()} text={a} height = "auto" color = {this.getColor(1)}></TextBox>)
                                            })
                                        }
                                </RoundedBox>
                            </RoundedBox>
                            );
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
    },
    dayContainer: {

    },
    container: {
        width: "100%",
        height: "60%",
        alignItems: 'center',
    },
    timetableContainer: {
        width: "100%",
        height: "60vh",
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "center"

    },
    text: {
        color: "#909090",
        textAlign: "center",
        fontSize: "150%",
        margin: "auto"
    },
    imageLink: {
        width: "40px",
        height: "40px",
        margin: "10px"
    },
    subjectsContainer: {
        minWidth: "100%", 
        justifyContent: "space-around", 
        alignItems: "center", 
        flexDirection: 'row'
    }
});