import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, LogBox} from 'react-native';

import HomeHeader from './components/HomeHeader';
import EateryList from './components/EateryList';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerSection}>
          <HomeHeader
            onSearchSubmit={term => {
              setSearchTerm(term);
            }}
          />
        </View>
        <View>
          <EateryList searchTerm={searchTerm} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  headerSection: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  categoriesSection: {
    backgroundColor: '#fff',
    paddingBottom: 18,
  },
});

export default HomeScreen;
