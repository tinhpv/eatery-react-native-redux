import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        renderLeftButton={() => {
          return (
            <View style={styles.searchLeftView}>
              <Ionicons name="location-sharp" size={22} />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View style={styles.searchRightView}>
              <AntDesign name="clockcircle" size={12} />
              <Text style={styles.rightViewText}>Search</Text>
            </View>
          );
        }}
        styles={{
          textInput: {
            height: 35,
            fontSize: 14,
            fontWeight: '500',
            backgroundColor: '#eee',
            borderRadius: 30,
            marginTop: 5,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchLeftView: {
    marginLeft: 15,
  },
  searchRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginRight: 8,
  },
  rightViewText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SearchBar;
