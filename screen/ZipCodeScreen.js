import React from "react";
import { FlatList, ImageBackground, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Suratthani', code: '84000'},
    { place: 'Puket', code: '83000'},
    { place: 'Bangkik', code: '10110'},
    { place: 'KhonKaen', code: '40000'},
    { place: 'Kanchanaburi', code: '71000'}
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
        <View style = {style.column}>
            <View style = {style.card}>
                <View style = {style.zipItem}>
                    <Text Text style = {style.textPlace}>{place}</Text>
                    <Text Text style = {style.textCode}>{code}</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source = {require('../sun.jpg')} style = {style.background}>
            <View>
                <FlatList
                data = {availableZipItems}
                key = {_keyExtractor}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
             />
             <StatusBar styte="auto" />
            </View>  
        </ImageBackground>
    )
}

const style = StyleSheet.create(
    {
      zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

      },
      zipPlace: {
        flex: 1,
      },
      zipCode: {
        flex: 1,
        color: 'black',
        fontSize: 30,
      },
      background: {
        width: '100%',
        height: '100%',

      },
      column: {
        margin: 10,
        flexDirection: 'column',
    
      },
    }
    
  ) 