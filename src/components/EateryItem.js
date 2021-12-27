import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Text style={styles.name}>{business.name}</Text>
      <View style={styles.descriptionView}>
        <Text style={styles.description}>
          {business.price} · {distanceInKm}km ·
        </Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={10} color={'#ffc300'} />
          <Text style={{...styles.description, marginLeft: 2}}>
            {business.rating} ({business.review_count})
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 6,
    marginLeft: 10,
  },
  descriptionView: {
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 10,
  },
  description: {
    fontSize: 10,
    fontWeight: '300',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
});

export default EateryItem;
