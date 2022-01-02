import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Favorites</Text>
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
});

export default FavoritesScreen;
