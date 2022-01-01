import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const EateryCategory = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    marginTop: 2,
    borderRadius: 2,
    marginRight: 3,
  },
  title: {
    fontSize: 9,
    fontWeight: '500',
    color: '#595959',
    padding: 3,
  },
});

export default EateryCategory;
