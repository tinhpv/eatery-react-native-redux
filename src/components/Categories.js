import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const categories = [
  {
    id: 1,
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    id: 2,
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    id: 3,
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    id: 4,
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    id: 5,
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    id: 6,
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    id: 7,
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View style={styles.row}>
                <Image source={item.image} style={styles.catIcon} />
                <Text style={styles.catText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
  },
  row: {
    alignItems: 'center',
    marginLeft: 23,
  },
  catIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  catText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Categories;
