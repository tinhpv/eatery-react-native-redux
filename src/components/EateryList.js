import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchBusinesses} from '../redux/actions';
import EateryItem from './EateryItem';

const EateryList = props => {
  useEffect(() => {
    props.fetchBusinesses('');
  }, []);

  return (
    <View>
      <FlatList
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

const mapStateToProps = state => {
  return {businesses: state.businesses};
};

export default connect(mapStateToProps, {
  fetchBusinesses,
})(EateryList);
