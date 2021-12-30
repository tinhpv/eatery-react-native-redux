import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationView = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={17} color={'#EE4E4E'} />
      <Text style={styles.content}>San Francisco, CA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  content: {
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 3,
  },
});

export default LocationView;
