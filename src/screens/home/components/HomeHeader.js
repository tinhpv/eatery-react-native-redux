import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import SearchBar from '../../../components/SearchBar';
import LocationView from '../../../components/LocationView';

const HomeHeader = ({onSearchSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <LocationView />
      <View style={styles.sloganView}>
        <Text style={styles.slogan}>Find good</Text>
        <Text style={styles.slogan}>Find around you</Text>
      </View>
      <Image
        source={require('../../../../assets/images/restaurant.png')}
        style={{
          width: 170,
          height: 170,
          resizeMode: 'contain',
          position: 'absolute',
          right: -45,
        }}
      />
      <SearchBar
        placeholder="Search your fav food"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSubmit={() => onSearchSubmit(searchTerm)}
      />
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
