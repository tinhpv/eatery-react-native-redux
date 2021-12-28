import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';

import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import EateryList from '../components/EateryList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.headerSection}>
        <HeaderTab />
        <SearchBar />
      </View>
      <View style={styles.categoriesSection}>
        <Categories />
      </View>
      <View>
        <EateryList />
      </View>
      {/* </ScrollView> */}
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
    paddingHorizontal: 18,
  },
  categoriesSection: {
    backgroundColor: '#fff',
    paddingBottom: 18,
  },
});

export default HomeScreen;
