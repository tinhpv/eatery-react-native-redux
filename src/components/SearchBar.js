import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({placeholder, searchTerm, setSearchTerm, onSubmit}) => {
  return (
    <View style={styles.search}>
      <Ionicons name="search-outline" size={16} color={'#808080'} />
      <TextInput
        autoCorrect={false}
        autoComplete={false}
        returnKeyType="search"
        style={styles.input}
        placeholder={placeholder}
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 12,
  },
  input: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 5,
    marginRight: 10,
  },
});

export default SearchBar;
