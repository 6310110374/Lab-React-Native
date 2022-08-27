import React, {useState} from 'react';
import { Text, ImageBackground, StyleSheet, View} from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({         
        main: '',
        description: '',
        temp: 0
    }) 

    return (
            <ImageBackground source = {require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.proportion}>
                        <Text style = {styles.text}>Zip code is {props.zipCode}.</Text>
                        <Forecast {...forecastInfo}/>
                </View>
            </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    proportion: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        width:"100%", 
        height:"40%", 
        paddingTop: Constants.statusBarHeight, 
        alignItems: 'center'
    },

});