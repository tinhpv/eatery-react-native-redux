import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EateryCategory from './EateryCategory';
import RatingView from './RatingView';

const EateryItem = ({business}) => {
  const distanceInKm = (business.distance / 1000).toFixed(2);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: business.image_url,
        }}
        style={styles.image}
      />
      <View style={styles.infoView}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{business.name}</Text>
          <Text style={styles.price}>{business.price}</Text>
        </View>
        <View style={styles.rating}>
          <RatingView rating={business.rating} />
          <Text style={styles.ratingCountText}>{business.review_count}</Text>
        </View>
        <View style={styles.categories}>
          {business.categories.map(item => {
            return <EateryCategory title={item.title} />;
          })}
        </View>
        <Text style={styles.status(business.isClosed)}>Opening</Text>
        <View style={styles.locationView}>
          <Ionicons name="location-sharp" size={10} color={'#9e9e9e'} />
          <Text style={styles.location}>
            {business.location.display_address[0]}, {distanceInKm} km
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 8,
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#bdbdbd',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  infoView: {
    flex: 1,
    marginLeft: 10,
  },
  nameView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingCountText: {
    fontSize: 10,
    fontWeight: '200',
    marginLeft: 2,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginRight: 12,
  },
  price: {
    fontSize: 8,
    marginLeft: 3,
    color: '#595959',
  },
  status: isClosed => ({
    marginTop: 6,
    fontSize: 11,
    fontWeight: '600',
    color: isClosed ? '#de4343' : '#27871f',
  }),
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  location: {
    fontSize: 8,
    fontWeight: '200',
    marginLeft: 2,
  },
});

export default EateryItem;
