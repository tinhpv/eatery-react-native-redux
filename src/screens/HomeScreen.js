import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet, Image} from 'react-native';

import HomeHeader from '../components/HomeHeader';
import EateryList from '../components/EateryList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerSection}>
          <HomeHeader />
        </View>
        <View>
          <EateryList />
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
