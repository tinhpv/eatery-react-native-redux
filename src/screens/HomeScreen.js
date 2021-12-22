import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';

import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerSection}>
          <HeaderTab />
          <SearchBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  headerSection: {
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default HomeScreen;
