import React from 'react';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';

import HeaderTab from '../components/HeaderTab';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <HeaderTab />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
