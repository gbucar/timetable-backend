import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RoundedBox from './roundedBox';
import TextBox from './textBox';

export default class TimetablePage extends Component {
    constructor(props) {
        super(props)

    }

    formateMaturaTimetable(maturaTimetable, timetable, clas) {
        if (!maturaTimetable) return timetable
        let nTimetable = [];
        let custom=maturaTimetable;
        for(let day in timetable){
            let table = timetable[day]
            if (table.length > 0) {
                switch (parseInt(day)) {
                    case 0:
                        table.unshift(custom["subjects"][0]);
                    break;
                    case 1:
                        table = table.concat(custom["subjects"].slice(1,4))
                    break;
                    case 2:
                        table.unshift(...custom["subjects"].slice(4,6))
                        table.push(custom["subjects"][custom["subjects"].length -1])
                    break;
                    case 3:
                        table = custom["subjects"].slice(6,8).concat(table)
                        table.unshift(custom["subjects"][9])
                        table.push(custom["subjects"][8])
                    break;
                    case 4:
                        table = table.concat(custom["subjects"].slice(10,12))
    
                    break;
                }
            }

            nTimetable.push(table);
        }
        return nTimetable
    }

    render() {
        let name = this.props.user[0];
        let secondName = this.props.user[1];
        let clas = this.props.user[2]
        let days = ["P", "T", "S", "Č", "P"];
        let maturaTimetable = this.props.maturaTimetable;
        let timetable = this.formateMaturaTimetable(maturaTimetable, this.props.timetable, clas);
        let gend = (maturaTimetable["gender"] ? maturaTimetable : [{"gender":"r"}])["gender"];
        let colors = {
            "m": ["#008CAB", "#ffffff"],
            "f": ["#FFA7A7", "#ffffff"],
            "r": ["#E2FF90"]
        }
        return(
            <View style={styles.container}>
                <TextBox backgroundColor = {colors[gend][0]} color={colors[gend][1]} text = {name + " " + secondName}></TextBox>
                <View style= {styles.timetableContainer}>
                    {
                        timetable.map((a, i) => {
                            return (
                            <RoundedBox overflow="shown" width="98%" key = {i}><Text style={styles.text}>{days[i]}</Text>
                                <RoundedBox borderRadius="5px" overflow="show" justifyContent="space-around" overrideWidth="90%">
                                    {a.map(a => {
                                        return(<TextBox backgroundColor={colors[gend][0]} margin="1px" overrideWidth="auto" padding={5} fontSize={"100%"} key = {Math.random()} text={a} height = "auto" color = {colors[gend][1]}></TextBox>)
                                    })}
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
    container: {
        width: "100%",
        height: "80vh",
        justifyContent: 'space-around',
        alignItems: 'center'
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
    }
});