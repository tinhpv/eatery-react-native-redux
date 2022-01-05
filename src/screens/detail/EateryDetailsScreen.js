import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {fetchBusinessDetails} from '../../redux/actions';
import RatingView from '../../components/RatingView';
import EateryCategory from '../../components/EateryCategory';
import MenuItems from './MenuItems';

const ClaimedEatery = () => {
  return (
    <View style={styles.claim}>
      <Ionicons name="shield-checkmark" size={13} color={'#00b7ff'} />
      <Text style={styles.claimText}>Claimed</Text>
    </View>
  );
};

const UnclaimedEatery = () => {
  return (
    <View style={styles.claim}>
      <Ionicons name="alert-circle" size={14} color={'#595959'} />
      <Text style={{...styles.claimText, color: '#595959'}}>Unclaimed</Text>
    </View>
  );
};

const Dot = () => {
  return (
    <Ionicons
      name="ellipse"
      size={3}
      style={{marginHorizontal: 4}}
      color={'#595959'}
    />
  );
};

const EateryDetailsScreen = props => {
  const {businessId} = props.route.params;
  const {details} = props;

  useEffect(() => {
    props.fetchBusinessDetails(businessId);
  }, []);

  const EateryInfoBox = () => {
    return (
      details && (
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{details.name}</Text>
          <View style={styles.generalInfo}>
            <RatingView rating={details.rating} />
            <Text style={styles.ratingCountText}>
              {details.review_count} reviews
            </Text>
          </View>
          <View style={styles.generalInfo}>
            {details.is_claimed ? ClaimedEatery() : UnclaimedEatery()}
            <Dot />
            <View style={styles.categories}>
              {details.categories.map(item => {
                return <EateryCategory title={item.title} />;
              })}
            </View>
          </View>
          <View style={styles.generalInfo}>
            <View style={styles.locationView}>
              <Ionicons name="location-sharp" size={13} color={'#9e9e9e'} />
              {details.location.display_address.map(location => {
                return <Text style={styles.location}>{location}</Text>;
              })}
            </View>
          </View>
        </View>
      )
    );
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri: details.image_url,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <EateryInfoBox />
      <MenuItems />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    margin: 10,
    bottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  generalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  ratingCountText: {
    fontSize: 12,
    fontWeight: '200',
    marginLeft: 2,
  },
  claim: {
    flexDirection: 'row',
  },
  claimText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#00b7ff',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 12,
  },
  status: isClosed => ({
    fontSize: 12,
    fontWeight: '600',
    color: isClosed ? '#de4343' : '#27871f',
  }),
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    fontWeight: '200',
    marginLeft: 2,
  },
});

const mapStateToProps = state => {
  return {details: state.details};
};

export default connect(mapStateToProps, {
  fetchBusinessDetails,
})(EateryDetailsScreen);
