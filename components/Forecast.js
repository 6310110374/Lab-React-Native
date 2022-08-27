import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function Forecast(props) {
    return (
        <View>
            <View>
                <Text style = {styles.main}>main</Text>
                <Text style = {styles.description}>{props.main}</Text>
                <Text style = {styles.description}>description</Text>
                <Text style = {styles.description}>{props.description}</Text>
            </View>

            <View style = {{flexDirection: "row", justifyContent: 'center'}}>
                <Text style = {styles.value}>{props.temp}</Text>
                <Text style = {styles.temp}>°C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: Constants.statusBarHeight,
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'white',
    },

    description: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
    },

    value: {
        fontSize: 40, 
        fontWeight: "norml", 
        color: 'white', 
        textAlign: 'center',

    },

    temp: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        lineHeight: 35,
    },

});