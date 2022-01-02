import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const FilledStar = () => {
  return (
    <Image
      style={styles.image}
      source={require(`../../assets/icons/star_filled.png`)}
    />
  );
};

const HalfFilledStar = () => {
  return (
    <Image
      style={styles.image}
      source={require('../../assets/icons/star_halffilled.png')}
    />
  );
};

const WhiteStar = () => {
  return (
    <Image
      style={styles.image}
      source={require('../../assets/icons/star_white.png')}
    />
  );
};

const RatingView = ({rating}) => {
  let starList = Array.from({length: 5}, (_, i) => i + 1);
  let splitRating = rating.toString().split('.');

  return (
    <View style={styles.container}>
      {starList.map(item => {
        if (item <= splitRating[0]) {
          return <FilledStar />;
        } else if (splitRating[1] === '5' && item === +splitRating[0] + 1) {
          return <HalfFilledStar />;
        } else {
          return <WhiteStar />;
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 14,
    height: 14,
    marginRight: 2.5,
  },
});

export default RatingView;
