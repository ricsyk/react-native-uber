import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
            }}
            source={{
                uri: 'https://links.papareact.com/gzs'}}/>
                
                <GooglePlacesAutocomplete
                placeholder="Where From?"
                styles={{
                    container: {
                        paddingBottom: 20,
                        flex: 1,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}

                
                onPress={(data, details = null) => {
                    console.log(data)
                    console.log(details)

                }}
                fetchDetails={true}

                enablePoweredByContainer={false}
                minLength={2}
                
                query={{
                   // key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                    origin: null,
                }}

                            
                requestUrl={{
                    useOnPlatform: 'web', // or "all"
                    url:
                    'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api

                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={800}
                />


                <NavOptions/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;