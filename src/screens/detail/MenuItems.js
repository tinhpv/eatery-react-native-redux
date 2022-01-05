import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MenuList from '../detail/Menus';

const MenuItems = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <View>
        {MenuList.map(item => {
          return (
            <TouchableOpacity key={item.id}>
              <View style={styles.row}>
                <Image
                  source={{
                    uri: item.image_url,
                  }}
                  resizeMode="cover"
                  style={styles.image}
                />
                <View style={styles.rightInfoView}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
                <View style={styles.add}>
                  <Ionicons name="add-circle" size={20} color={'#de4343'} />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: -25,
  },
  header: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    marginVertical: 4,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  rightInfoView: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '500',
  },
  description: {
    fontSize: 10,
    fontWeight: '200',
    marginTop: 4,
  },
  add: {
    alignSelf: 'flex-end',
  },
});

export default MenuItems;
