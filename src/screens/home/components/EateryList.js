import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {fetchBusinesses} from '../../../redux/actions';
import EateryItem from './EateryItem';

const EateryList = props => {
  const {searchTerm} = props;

  useEffect(() => {
    props.fetchBusinesses(searchTerm);
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Nearby Eateries</Text>
      <FlatList
        scrollEnabled={false}
        keyExtractor={business => business.id}
        data={props.businesses.businesses}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <EateryItem business={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 6,
  },
});

const mapStateToProps = state => {
  return {businesses: state.businesses};
};

export default connect(mapStateToProps, {
  fetchBusinesses,
})(EateryList);
