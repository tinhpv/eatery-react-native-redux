import React, {useState} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import HomeHeader from './components/HomeHeader';
import EateryList from './components/EateryList';

const HomeScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListFooterComponent={
          <>
            <View style={styles.headerSection}>
              <HomeHeader
                onSearchSubmit={term => {
                  setSearchTerm(term);
                }}
              />
            </View>
            <View>
              <EateryList
                searchTerm={searchTerm}
                navigateHandler={navigation}
              />
            </View>
          </>
        }
      />
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
