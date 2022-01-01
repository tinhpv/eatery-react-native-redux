import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import SearchBar from '../../../components/SearchBar';
import LocationView from '../../../components/LocationView';

const HomeHeader = () => {
  return (
    <View>
      <LocationView />
      <View style={styles.sloganView}>
        <Text style={styles.slogan}>Find good</Text>
        <Text style={styles.slogan}>Find around you</Text>
      </View>
      <Image
        source={require('../../assets/images/restaurant.png')}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          position: 'absolute',
          right: -25,
          bottom: 62,
        }}
      />
      <SearchBar placeholder="Search your fav food" />
    </View>
  );
};

const styles = StyleSheet.create({
  sloganView: {
    marginVertical: 14,
  },
  slogan: {
    fontSize: 22,
    fontWeight: '700',
  },
});

export default HomeHeader;
